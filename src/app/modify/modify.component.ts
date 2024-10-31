import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { IContent } from '../data/mock-content';

@Component({
  selector: 'app-modify',
  standalone: true,
  templateUrl: './modify.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: './modify.component.css'

})
export class ModifyComponent implements OnInit {
  contentForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fbuild: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contentForm = this.fbuild.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      inventor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const contentId = +this.route.snapshot.paramMap.get('id')!;
    if (contentId) {
      this.isEditing = true;
      this.dataService.getItems().subscribe((items: IContent[]) => {
        const contentItem = items.find((item: IContent) => item.id === contentId);
        if (contentItem) {
          this.contentForm.patchValue(contentItem);
        }
      });
    }
  }

  onSubmit(): void {
    const contentItem: IContent = this.contentForm.value;
    if (this.isEditing) {
      this.dataService.updateItem(contentItem);
    } else {
      this.dataService.addItem(contentItem);
    }
    this.contentForm.reset();
    this.router.navigate(['/list']);
  }
}
