import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node.interface';

@Component({
  selector: 'app-tree-view',
  standalone: false,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss'
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
  
  expandedNodes = new Set<number>();
  
  toggleNode(nodeId: number): void {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
  }
  
  hasChildren(node: TreeNode): boolean {
    return node.children && node.children.length > 0;
  }
  
  isExpanded(nodeId: number): boolean {
    return this.expandedNodes.has(nodeId);
  }
}
