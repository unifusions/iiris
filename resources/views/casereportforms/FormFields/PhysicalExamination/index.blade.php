<x-app-layout>
    

     @empty($physicalexamination)
          No Record Created
          @else
          {{ $physicalexamination }}
     @endempty
</x-app-layout>