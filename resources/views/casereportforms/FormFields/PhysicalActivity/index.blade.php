<x-app-layout>
     <x-slot name="header">
         <nav aria-label="breadcrumb ">
             <ol class="breadcrumb">
                 <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                         {{ __('Case Report Form  ') }}</a> </li>
                 <li class="breadcrumb-item"><a href={{ route('crf.show', $storeParameters['crf']) }}
                         class=""> {{ $crf->subject_id }}
                     </a> </li>
 
                 <li class="breadcrumb-item"><a
                         href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                         class="">
                         {{ $breadcrumb['name'] }} </a> </li>
 
                 <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Physical Activity') }}</span>
                 </li>
             </ol>
         </nav>
     </x-slot>
 
     @if (empty($preoperative->physical_activity))
         <div class="container">
             <form
                 action="{{ route('crf.preoperative.update', ['crf' => $storeParameters['crf'], 'preoperative' => $storeParameters['preoperative']]) }}"
                 method="POST">
                 @method('PUT')
                 @csrf
                 <div class="card">
                     <div class="card-body">
                         <div class="d-flex justify-content-between">
                             <div class="d-flex">
                                 <div class="fw-bold me-3"> Has Physical Activity ?</div>
                                 <div class="form-check form-check-inline">
                                     <input class="form-check-input" type="radio" name="physical_activity" id="pa_yes"
                                         value="1">
                                     <label class="form-check-label" for="pa_yes">Yes</label>
                                 </div>
 
                                 <div class="form-check form-check-inline">
                                     <input class="form-check-input" type="radio" name="physical_activity" id="pa_no"
                                         value="0">
                                     <label class="form-check-label" for="pa_no">No</label>
                                 </div>
                             </div>
                             <button type="submit" class="btn btn-primary">Save</button>
                         </div>
                     </div>
                 </div>
             </form>
 
         </div>
     @else
         @if ($preoperative->physical_activity)
         <div class="container-fluid">
             <div class="row g-3">
                 <div class="col-sm-4">
                     <div class="card  shadow-sm rounded-5">
                         <div class="card-header">
                             <h4>Add Physical Activity</h4>
                         </div>
                         <div class="card-body">
                             <form
                                 action="{{ route($storeUri, ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                 method="POST">
                                 @csrf
 
                                 <div class="row mb-3">
                                     <div class="col-sm-3 col-form-label">
                                         <label class="form-label">Activity</label>
                                     </div>
                                     <div class="col-sm-9">
                                         <div class="input-group">
                                             <input type="text" class="form-control" name="activity_type" placeholder=""
                                                 value="">
                                         </div>
                                     </div>
                                 </div>

                                 <div class="row mb-3">
                                   <div class="col-sm-3 col-form-label">
                                       <label class="form-label">Duration</label>
                                   </div>
                                   <div class="col-sm-9">
                                       <div class="input-group">
                                           <input type="number" class="form-control with-units" name="duration" placeholder=""
                                               value="">
                                               <span class="input-group-text input-units text-secondary">mins</span>
                                       </div>
                                   </div>
                               </div>
 
                              
 
 
                                 <div class="row">
                                     <div class="col-sm-9 col-offset-3">
                                         <button class="btn btn-primary">Add</button>
                                     </div>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
 
                 <div class="col-sm-8">
                     
                     @if (count($preoperative->physicalactivities) > 0)
                         <div class="card  shadow-sm rounded-5">
                             <div class="card-body">
                                 <table class="table">
                                     <tr>
                                     <th>Activity</th>
                                     <th>Duration</th>
                                    <th></th>
                                     </tr>
 
                                     @foreach ($preoperative->physicalactivities as $physicalactivity)
                                         <tr>
                                             <td>{{ $physicalactivity->activity_type }}</td>
                                            
                                             <td>{{ $physicalactivity->duration }}</td>
                                             
                                             <form action="{{ route($destroyUri,['crf' => $crf, 'preoperative' => $preoperative, 'physicalactivity' => $physicalactivity]) }}" method="POST">
                                                 @method('DELETE')
                                                 @csrf
                                                 <td>
                                                     <button class="btn btn-danger btn-sm">Delete</button>
                                                 </td>
                                             </form>
 
                                             
                                         </tr>
                                     @endforeach
 
                                 </table>
 
 
 
                             </div>
 
                             <div class="card-footer">
                                 <a
                         href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                         class="btn btn-primary"> Back</a>
                             </div>
 
 
 
 
                         </div>
                     @endif
                 </div>
 
 
             </div>
         </div>
         @else
             false
         @endif
     @endif
 
 </x-app-layout>
 