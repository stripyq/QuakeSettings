(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{6856:(e,t,a)=>{Promise.resolve().then(a.bind(a,9529))},9529:(e,t,a)=>{"use strict";a.d(t,{default:()=>p});var r=a(5155),s=a(2115),o=a(2079),l=a(9789),n=a(9083);let d=[{mouse:"Razer DeathAdder V3 Pro",shape:"Ergonomic",length:128}],c=[{mousepad:"Artisan HAYATE-OTSU",material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+HAYATE-OTSU&linkCode=progamingge07-20&tag=ll2"}],i=[{keyboard:"Wooting 80HE",techless:!0,productLink:"https://wooting.io/wooting-80he"}],m=[{monitor:"ASUS ROG Strix OLED XG27AQDMG",size:'27"',resolution:"2560\xd71440",refreshRate:"240Hz",productLink:"https://www.asus.com/"}],h=[{accessorKey:"mouse",header:"Mouse"},{accessorKey:"shape",header:"Shape"},{accessorKey:"length",header:"Length (mm)"}],u=[{accessorKey:"mousepad",header:"Mousepad",cell:e=>{let{row:t}=e,a=t.getValue("productLink"),s=t.getValue("mousepad");return a?(0,r.jsx)("a",{href:a,className:"text-blue-600 hover:underline",target:"_blank",children:s}):(0,r.jsx)("span",{children:s})}},{accessorKey:"material",header:"Material"}],g=[{accessorKey:"keyboard",header:"Keyboard",cell:e=>{let{row:t}=e,a=t.getValue("productLink"),s=t.getValue("keyboard");return a?(0,r.jsx)("a",{href:a,className:"text-blue-600 hover:underline",target:"_blank",children:s}):(0,r.jsx)("span",{children:s})}},{accessorKey:"techless",header:"Techless",cell:e=>{let{row:t}=e;return t.getValue("techless")?"Yes":"No"}}],f=[{accessorKey:"monitor",header:"Monitor",cell:e=>{let{row:t}=e,a=t.getValue("productLink"),s=t.getValue("monitor");return a?(0,r.jsx)("a",{href:a,className:"text-blue-600 hover:underline",target:"_blank",children:s}):(0,r.jsx)("span",{children:s})}},{accessorKey:"size",header:"Size"},{accessorKey:"resolution",header:"Resolution"},{accessorKey:"refreshRate",header:"Refresh Rate"}];function p(){let[e,t]=s.useState([]),[a,p]=s.useState([]),[x,b]=s.useState([]),[N,w]=s.useState([]),y=(0,l.N4)({data:d,columns:h,getCoreRowModel:(0,n.HT)(),onSortingChange:t,getSortedRowModel:(0,n.h5)(),state:{sorting:e}});return(0,l.N4)({data:c,columns:u,getCoreRowModel:(0,n.HT)(),onSortingChange:p,getSortedRowModel:(0,n.h5)(),state:{sorting:a}}),(0,l.N4)({data:i,columns:g,getCoreRowModel:(0,n.HT)(),onSortingChange:b,getSortedRowModel:(0,n.h5)(),state:{sorting:x}}),(0,l.N4)({data:m,columns:f,getCoreRowModel:(0,n.HT)(),onSortingChange:w,getSortedRowModel:(0,n.h5)(),state:{sorting:N}}),(0,r.jsxs)("main",{className:"container mx-auto py-6",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Gear Recommendations"}),(0,r.jsx)("p",{className:"text-gray-600 mb-6",children:"Curated list of top PC gaming peripherals from various reviewers recommendations at the end of 2024. You DON'T need this, but it's nice to have. :)"}),(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Gaming Mice"}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)(o.XI,{children:[(0,r.jsx)(o.A0,{children:y.getHeaderGroups().map(e=>(0,r.jsx)(o.Hj,{children:e.headers.map((e,t)=>(0,r.jsx)(o.nd,{className:"".concat(0===t?"sticky left-0 bg-background":""),children:(0,l.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(o.BF,{children:y.getRowModel().rows.map(e=>(0,r.jsx)(o.Hj,{children:e.getVisibleCells().map((e,t)=>(0,r.jsx)(o.nA,{className:"".concat(0===t?"sticky left-0 bg-background":""),children:(0,l.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})]})]})}},2079:(e,t,a)=>{"use strict";a.d(t,{A0:()=>n,BF:()=>d,Hj:()=>c,XI:()=>l,nA:()=>m,nd:()=>i});var r=a(5155),s=a(2115),o=a(9602);let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",a),...s})})});l.displayName="Table";let n=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",a),...s})});n.displayName="TableHeader";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",a),...s})});d.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,o.cn)("bg-primary font-medium text-primary-foreground",a),...s})}).displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});c.displayName="TableRow";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});i.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});m.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>o});var r=a(3463),s=a(6458);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.Q)((0,r.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[52,789,441,517,358],()=>t(6856)),_N_E=e.O()}]);