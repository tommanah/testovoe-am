import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeViewComponent } from './tree-view.component';
import { TreeNode } from './tree-node.interface';

describe('TreeViewComponent', () => {
  let component: TreeViewComponent;
  let fixture: ComponentFixture<TreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should toggle node expansion', () => {
    const nodeId = 1;
    
    expect(component.isExpanded(nodeId)).toBeFalsy();
    
    component.toggleNode(nodeId);
    expect(component.isExpanded(nodeId)).toBeTruthy();
    
    component.toggleNode(nodeId);
    expect(component.isExpanded(nodeId)).toBeFalsy();
  });
  
  it('should detect if node has children', () => {
    const nodeWithChildren: TreeNode = {
      id: 1,
      title: 'Test',
      is_deleted: false,
      children: [
        {
          id: 2,
          title: 'Child',
          is_deleted: false,
          children: []
        }
      ]
    };
    
    const nodeWithoutChildren: TreeNode = {
      id: 3,
      title: 'Test without children',
      is_deleted: false,
      children: []
    };
    
    expect(component.hasChildren(nodeWithChildren)).toBeTruthy();
    expect(component.hasChildren(nodeWithoutChildren)).toBeFalsy();
  });
});
