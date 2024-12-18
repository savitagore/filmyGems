import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';


import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CustomerServiceService } from '../../core/service/customer-service.service';
import { Customer, Representative } from '../../core/interface/customer.model';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [InputTextModule,TableModule, FormsModule, CommonModule, InputTextModule, TagModule, 
    DropdownModule, MultiSelectModule, ProgressBarModule, ButtonModule,SliderModule,RouterOutlet,DialogModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css'
})
export class AdminSettingsComponent implements OnInit { 
  customers!: Customer[];
  
  visible: boolean = false;
  selectedCustomer: any = {};


  representatives!: Representative[];
  selectedRepresentatives: any[] = [];
  
  statuses!: any[];
  selectedstatuses: any[] = [];
  
  loading: boolean = true;
  
  activityValues: number[] = [0, 100];
  
  searchValue: string | undefined;
  
  constructor(private customerService: CustomerServiceService) {}
  
  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => {
          this.customers = customers;
          this.loading = false;
  
          this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      });
  
      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      ];
  
      this.statuses = [
          { label: 'Inactive', value: 'inactive' },
          { label: 'Active', value: 'active' },
      ];
  }
  
  clear(table: Table) {
      table.clear();
      this.searchValue = ''
  }

  showProfile(customer: any) {
    this.selectedCustomer = { ...customer };  // Create a copy of customer for editing
    this.visible = true;
}

saveCustomer(customer: any) {
    // Code to save the edited customer information
    this.visible = false;
}




  
  getSeverity(status: string): 'secondary' | 'success' | undefined {
    switch (status.toLowerCase()) {
        case 'inactive':
            return 'secondary';
        case 'active':
            return 'success';
        case 'renewal':
            return undefined;  // Change null to undefined
        default:
            return undefined;  // Ensures all paths return undefined
    }
  }
  
  
  editedRowIndex: number | null = null;
  
  // Enable editing for the selected row
  onEdit(index: number) {
    this.editedRowIndex = index;
  }
  
  // Save the changes made to the product
  onSave(customers: any) {
    this.editedRowIndex = null;
    console.log('Product saved:', customers);
  }
  
  // Cancel editing and revert changes
  onCancel() {
    this.editedRowIndex = null;
  }
  
  // Delete the selected row
  onDelete(index: number) {
    confirm("Are you want to delete this profile...?")
    this.customers.splice(index, 1);
    console.log('Product deleted at index:', index);
  }

  
  }

