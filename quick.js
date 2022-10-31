<script>
/* A typical recursive implementation of
Quicksort for array*/
	
/* This function takes last element as pivot,
places the pivot element at its correct
position in sorted array, and places all
smaller (smaller than pivot) to left of
pivot and all greater elements to right
of pivot */

function partition (arr,l,h)
{
	let x = arr[h];
	let i = (l - 1);
	
	for(let j = l; j <= h - 1; j++)
	{
		if (arr[j] <= x)
		{
			i++;
			let tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
	}
	let tmp = arr[i + 1];
	arr[i + 1] = arr[h];
	arr[h] = tmp;
	return(i + 1);
}

/* A[] --> Array to be sorted,
	l --> Starting index,
	h --> Ending index */
function quickSort(A,l,h)
{
	if (l < h)
	{
		
		// Partitioning index
		let p = partition(A, l, h);
		quickSort(A, l, p - 1);
		quickSort(A, p + 1, h);
	}
}


// This code is contributed by unknown2108
</script>
