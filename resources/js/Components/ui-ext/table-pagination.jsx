import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { router } from "@inertiajs/react"

export function TablePagination({  links , total, from, to}) {

const previous = links[0]
  const next = links[links.length - 1]

  const pageLinks = links.slice(1, -1)

  const goTo = (url ) => {
    if (!url) return
    router.visit(url, { preserveScroll: true, preserveState: true })
  }

  return (
    <div className="grid grid-cols-2 items-center">
     
     
      <div  >
<Pagination>
      <PaginationContent>

        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => goTo(previous.url)}
            className={!previous.url ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Pages */}
        {pageLinks.map((link, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => goTo(link.url)}
              isActive={link.active}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => goTo(next.url)}
            className={!next.url ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
      </div>
    <div className="text-right">
      Showing Results {from} {from && to && '-'} {to} of {total}
    </div>
    </div>
 
  )
}
