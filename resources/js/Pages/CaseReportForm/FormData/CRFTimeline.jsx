import { AlertCircle, Check, Circle, CircleX, Clock } from "lucide-react";


const STAGE_CONFIG = {
  'pre-op': {
    id: 'pre-op',
    label: 'Pre-Oerative',
    description: 'Pre-operative assessment',
    order: 1,
  },
  'intra-op': {
    id: 'intra-op',
    label: 'Intra-Operative',
    description: 'Intra-operative data',
    order: 2,
  },
  'post-op': {
    id: 'post-op',
    label: 'Post-Operative',
    description: 'Post-operative assessment',
    order: 3,
  },
  'scheduled-visits': {
    id: 'scheduled-visits',
    label: 'Scheduled Visits',
    description: 'Follow-up visits',
    order: 4,
  },
  'unscheduled-visit': {
    id: 'unscheduled-visit',
    label: 'Unscheduled Visit',
    description: 'Unscheduled follow-up',
    order: 5,
  },
}
const stages = Object.values(STAGE_CONFIG);


export default function CRFTimeline({ crf, activeStage, }) {

  const isClosed = crf?.unscheduledvisits?.length > 0;

  const getStageStatus = (stageId) => {



    const stageData = {
      'pre-op': crf?.preoperative,
      'intra-op': crf?.intraoperative,
      'post-op': crf?.postoperative,
      'scheduledvisits': { isComplete: crf?.scheduledvisits.every(v => v.is_submitted === 1) },
      'unscheduledvisits': { isClosed: crf?.unscheduledvisits.length > 0 },
    }[stageId];


    if (stageData?.is_submitted) return 'complete'; 
    if (activeStage === stageId) return 'current';
    if (stageId === 'unscheduled-visit') {
      if (isClosed) return 'closed';
      return 'pending';
    }

    return 'pending';
  };

  const getScheduledVisitsProgress = () => {
    const completed = crf?.scheduledvisits?.filter(v => v.is_submitted === 1).length;

    const total = crf?.scheduledvisits?.length;
    return { completed, total };
  };


  return (
    <div className="relative">
      <div className="flex items-start justify-between">
        {stages.map((stage, index) => {
          const status = getStageStatus(stage.id);
          const isActive = activeStage === stage.id;
          const visitProgress = stage.id === 'scheduled-visits' ? getScheduledVisitsProgress() : null;
          const closed = stage.id === 'unscheduled-visit' ? crf?.unscheduledvisits.length > 0 && true : false;
          return (
            <div key={stage.id} className="flex flex-col items-center flex-1 relative">
              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div
                  className={`
                      absolute top-5 left-1/2 w-full h-0.5 z-0
                      ${status === 'complete' ? 'bg-accent' : 'bg-muted'}
                    `}
                />
              )}

              {/* Stage Circle */}
              <button

                className={`
                    relative z-10 w-10 h-10 rounded-full flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${status === 'closed'
                    ? 'bg-red-600 text-white'
                    :
                    status === 'complete'
                      ? 'bg-accent text-accent-foreground'
                      : status === 'current'
                        ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                        : status === 'warning'
                          ? 'bg-warning text-warning-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }
                    ${isActive ? 'scale-110' : 'hover:scale-105'}
                  `}
              >
                {status === 'closed' ? (
                  <CircleX className="w-5 h-5 text-white" />
                ) : status === 'complete' ? (
                  <Check className="w-5 h-5 text-white" />
                ) : status === 'current' ? (
                  <Clock className="w-5 h-5" />
                ) : status === 'warning' ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </button>

              {/* Stage Label */}
              <div className="mt-3 text-center">
                <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {visitProgress && (
                    <p className="text-xs text-info mt-1">
                      {visitProgress.completed}/{visitProgress.total} visits completed
                    </p>
                  )}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
