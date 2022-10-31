<script>
// A Javascript program to sort a linked list using Quicksort
let head;

/* a node of the doubly linked list */
class Node
{
	constructor(d)
	{
		this.data = d;
		this.next = null;
		this.prev = null;
	}
}

// A utility function to find last node of linked list
function lastNode(node)
{
	while(node.next != null)
			node = node.next;
		return node;
}

/* Considers last element as pivot, places the pivot element at its
correct position in sorted array, and places all smaller (smaller than
pivot) to left of pivot and all greater elements to right of pivot */
function partition(l, h)
{

	// set pivot as h element
		let x = h.data;
		
		// similar to i = l-1 for array implementation
		let i = l.prev;
		
		// Similar to "for (int j = l; j <= h- 1; j++)"
		for(let j=l; j!=h; j=j.next)
		{
			if(j.data <= x)
			{
				// Similar to i++ for array
				i = (i == null) ? l : i.next;
				let temp = i.data;
				i.data = j.data;
				j.data = temp;
			}
		}
		i = (i == null) ? l : i.next; // Similar to i++
		let temp = i.data;
		i.data = h.data;
		h.data = temp;
		return i;
}

/* A recursive implementation of quicksort for linked list */
function _quickSort(l,h)
{
	if(h != null && l!=h && l != h.next){
			let temp = partition(l, h);
			_quickSort(l,temp.prev);
			_quickSort(temp.next,h);
		}
}

// The main function to sort a linked list. It mainly calls _quickSort()
function quickSort(node)
{
	// Find last node
		let head = lastNode(node);
		
		// Call the recursive QuickSort
		_quickSort(node,head);
}

// A utility function to print contents of arr
function printList(head)
{
	while(head!=null){
			document.write(head.data+" ");
			head = head.next;
		}
}

/* Function to insert a node at the beginning of the Doubly Linked List */
function push(new_Data)
{
	let new_Node = new Node(new_Data);	 /* allocate node */
		
		// if head is null, head = new_Node
		if(head==null){
			head = new_Node;
			return;
		}
		
		/* link the old list off the new node */
		new_Node.next = head;
		
		/* change prev of head node to new node */
		head.prev = new_Node;
		
		/* since we are adding at the beginning, prev is always NULL */
		new_Node.prev = null;
		
		/* move the head to point to the new node */
		head = new_Node;
}

/* Driver program to test above function */
push(5);
push(20);
push(4);
push(3);
push(30);


document.write("Linked List before sorting <br>");
printList(head);
document.write("<br>Linked List after sorting<br>");
quickSort(head);
printList(head);

// This code is contributed by patel2127
</script>
