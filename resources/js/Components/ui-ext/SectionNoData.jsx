 

export default function SectionNoData({ title }) {
     return (
          <div className="flex flex-col  items-start gap-2 text-foreground/70">
                
               <span className="text-sm">No {title} has been recorded. Go ahead and create one.</span>
          </div>
     )
}