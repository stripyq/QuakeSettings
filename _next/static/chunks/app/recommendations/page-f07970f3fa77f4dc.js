(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{6856:(e,t,s)=>{Promise.resolve().then(s.bind(s,3882))},3882:(e,t,s)=>{"use strict";s.d(t,{default:()=>v});var r=s(5155),a=s(2115);let l=(0,a.createContext)(null),o={didCatch:!1,error:null};class n extends a.Component{static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){let{error:e}=this.state;if(null!==e){for(var t,s,r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];null===(t=(s=this.props).onReset)||void 0===t||t.call(s,{args:a,reason:"imperative-api"}),this.setState(o)}}componentDidCatch(e,t){var s,r;null===(s=(r=this.props).onError)||void 0===s||s.call(r,e,t)}componentDidUpdate(e,t){let{didCatch:s}=this.state,{resetKeys:r}=this.props;if(s&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,s)=>!Object.is(e,t[s]))}(e.resetKeys,r)){var a,l;null===(a=(l=this.props).onReset)||void 0===a||a.call(l,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(o)}}render(){let{children:e,fallbackRender:t,FallbackComponent:s,fallback:r}=this.props,{didCatch:o,error:n}=this.state,i=e;if(o){let e={error:n,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)i=t(e);else if(s)i=(0,a.createElement)(s,e);else if(void 0!==r)i=r;else throw n}return(0,a.createElement)(l.Provider,{value:{didCatch:o,error:n,resetErrorBoundary:this.resetErrorBoundary}},i)}constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=o}}var i=s(2079),d=s(4085),c=s(2442);let h=(0,s(3518).A)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]);var m=s(9789),u=s(9083);let g=[{mouse:"Razer DeathAdder V3 Pro",diamondLobby:!0,techless:!0,boardzy:!0,rocketJumpNinja:!0,shape:"Ergonomic",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:128,width:68,height:44,weight:44,mouseDPI:26e3},{mouse:"Lamzu Maya X",diamondLobby:!0,techless:!1,boardzy:!0,rocketJumpNinja:!0,shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:124.4,width:64.9,height:39.6,weight:39.6,mouseDPI:26e3}],x=[{mousepad:"Artisan HAYATE-OTSU",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+HAYATE-OTSU&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan HIEN",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+HIEN&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan Key-83",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+Key-83&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan RAIDEN",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+RAIDEN&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan Type-99",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+Type-99&linkCode=progamingge07-20&tag=ll2"}],p=[{keyboard:"Wooting 80HE",techless:!0,diamondLobby:!0,productLink:"https://wooting.io/wooting-80he?partner_id=quakesettings"},{keyboard:"Keychron Q1 HE",techless:!0,diamondLobby:!0,productLink:"https://www.amazon.de/s?k=Keychron+Q1+HE&linkCode=progamingge07-20&tag=ll2"},{keyboard:"MCHOSE Ace 60 Pro",techless:!1,diamondLobby:!1,productLink:"https://www.amazon.de/s?k=MCHOSE+Ace+60+Pro&linkCode=progamingge07-20&tag=ll2"},{keyboard:"ATK 68 V2",techless:!1,diamondLobby:!1,productLink:"https://www.amazon.de/s?k=hall+effect+keyboard+iso&linkCode=ll2&tag=progamingge07-20"},{keyboard:"Wooting 60HE",techless:!0,diamondLobby:!0,productLink:"https://wooting.io/wooting-60he?partner_id=quakesettings"}],b=[{monitor:"ASUS ROG Strix OLED XG27AQDMG",techless:!0,monitorsUnboxed:!0,size:'27"',resolution:"2560\xd71440",panelTech:"OLED",refreshRate:"240Hz"},{monitor:"ASUS ROG Swift OLED PG27AQDP",techless:!0,monitorsUnboxed:!0,size:'27"',resolution:"2560\xd71440",panelTech:"OLED",refreshRate:"240Hz"}],f=[{accessorKey:"mouse",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Mouse"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})},cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[150px] font-medium",children:t.getValue("mouse")||"N/A"})}},{accessorKey:"shape",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Shape"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})}},{accessorKey:"weight",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Weight (g)"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})},cell:e=>{let{row:t}=e,s=t.getValue("weight");return(0,r.jsx)("div",{className:"font-mono text-right",children:null!=s?s.toString():"-"})}},{accessorKey:"diamondLobby",header:"Diamond Lobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"text-center",children:t.getValue("diamondLobby")?(0,r.jsxs)("a",{href:"https://www.youtube.com/@DiamondLobbyReviews",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(h,{className:"h-4 w-4 mx-auto"}),(0,r.jsx)("span",{className:"sr-only",children:"Reviewed by DiamondLobby"})]}):null})}}],j=[{accessorKey:"mousepad",header:"Mousepad",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[300px]",children:(0,r.jsx)("a",{href:t.getValue("productLink")||"#",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:t.getValue("mousepad")||"N/A"})})}},{accessorKey:"material",header:"Material",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[100px]",children:t.getValue("material")||"N/A"})}},{accessorKey:"diamondLobby",header:"Diamond Lobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[70px] text-center",children:t.getValue("diamondLobby")?(0,r.jsx)(h,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"boardzy",header:"boardzy",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[70px] text-center",children:t.getValue("boardzy")?(0,r.jsx)(h,{className:"h-4 w-4 mx-auto"}):null})}}],y=[{accessorKey:"keyboard",header:"Keyboard",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[300px]",children:(0,r.jsx)("a",{href:t.getValue("productLink")||"#",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:t.getValue("keyboard")||"N/A"})})}},{accessorKey:"techless",header:"techless",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("techless")?(0,r.jsx)(h,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"diamondLobby",header:"Diamond Lobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("diamondLobby")?(0,r.jsx)(h,{className:"h-4 w-4 mx-auto"}):null})}}],w=[{accessorKey:"monitor",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Monitor"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})}},{accessorKey:"size",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Size"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})}},{accessorKey:"resolution",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Resolution"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})}},{accessorKey:"refreshRate",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Refresh Rate"}),(0,r.jsx)(c.A,{className:"h-4 w-4"})]})}}];function N(e){let{error:t,resetErrorBoundary:s}=e;return(0,r.jsxs)("div",{role:"alert",children:[(0,r.jsx)("p",{children:"Something went wrong:"}),(0,r.jsx)("pre",{children:t.message}),(0,r.jsx)("button",{onClick:s,children:"Try again"})]})}function v(){var e,t,s,l;let[o,d]=a.useState([]),[c,h]=a.useState([]),[v,k]=a.useState([]),[C,A]=a.useState([]),S=(0,m.N4)({data:g,columns:f,getCoreRowModel:(0,u.HT)(),onSortingChange:d,getSortedRowModel:(0,u.h5)(),state:{sorting:o}}),R=(0,m.N4)({data:x,columns:j,getCoreRowModel:(0,u.HT)(),onSortingChange:h,getSortedRowModel:(0,u.h5)(),state:{sorting:c}}),L=(0,m.N4)({data:p,columns:y,getCoreRowModel:(0,u.HT)(),onSortingChange:k,getSortedRowModel:(0,u.h5)(),state:{sorting:v}}),H=(0,m.N4)({data:b,columns:w,getCoreRowModel:(0,u.HT)(),onSortingChange:A,getSortedRowModel:(0,u.h5)(),state:{sorting:C}});return(0,r.jsxs)("main",{className:"container mx-auto py-6",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Gear Recommendations"}),(0,r.jsx)("p",{className:"text-gray-600 mb-6",children:"Various reviewers recommendations for gaming pc peripherals at the end of 2024. You DONT need this, but it's nice:)"}),(0,r.jsx)(n,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Gaming Mice"}),(0,r.jsx)("p",{className:"mb-4",children:"Comparison of selected gaming mice from relatively trusted sources."}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.A0,{children:S.getHeaderGroups().map(e=>(0,r.jsx)(i.Hj,{children:e.headers.map((e,t)=>(0,r.jsx)(i.nd,{className:"".concat(0===t?"sticky left-0 z-20 bg-background":""," p-0"),children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(i.BF,{children:(null===(e=S.getRowModel().rows)||void 0===e?void 0:e.length)?S.getRowModel().rows.map(e=>(0,r.jsx)(i.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map((e,t)=>(0,r.jsx)(i.nA,{className:0===t?"sticky left-0 bg-background":"",children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(i.Hj,{children:(0,r.jsx)(i.nA,{colSpan:f.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(n,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Mousepads"}),(0,r.jsx)("p",{className:"mb-4",children:"A selection of mousepads with different materials and surface types."}),(0,r.jsx)("div",{className:"overflow-x-auto max-w-fit",children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.A0,{children:R.getHeaderGroups().map(e=>(0,r.jsx)(i.Hj,{children:e.headers.map(e=>(0,r.jsx)(i.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(i.BF,{children:(null===(t=R.getRowModel().rows)||void 0===t?void 0:t.length)?R.getRowModel().rows.map(e=>(0,r.jsx)(i.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(i.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(i.Hj,{children:(0,r.jsx)(i.nA,{colSpan:j.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(n,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Keyboards"}),(0,r.jsx)("p",{className:"mb-4",children:"A handpicked range of gaming keyboards evaluated by experienced reviewers."}),(0,r.jsx)("div",{className:"overflow-x-auto max-w-fit",children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.A0,{children:L.getHeaderGroups().map(e=>(0,r.jsx)(i.Hj,{children:e.headers.map(e=>(0,r.jsx)(i.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(i.BF,{children:(null===(s=L.getRowModel().rows)||void 0===s?void 0:s.length)?L.getRowModel().rows.map(e=>(0,r.jsx)(i.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(i.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(i.Hj,{children:(0,r.jsx)(i.nA,{colSpan:y.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(n,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Monitors"}),(0,r.jsx)("p",{className:"mb-4",children:"A curated list of multiplayer gaming monitors with most important specs."}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.A0,{children:H.getHeaderGroups().map(e=>(0,r.jsx)(i.Hj,{children:e.headers.map(e=>(0,r.jsx)(i.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(i.BF,{children:(null===(l=H.getRowModel().rows)||void 0===l?void 0:l.length)?H.getRowModel().rows.map(e=>(0,r.jsx)(i.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(i.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(i.Hj,{children:(0,r.jsx)(i.nA,{colSpan:w.length,className:"h-24 text-center",children:"No results."})})})]})})]})})]})}},4085:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var r=s(5155),a=s(2115),l=s(1290),o=s(1027),n=s(9602);let i=(0,o.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:s,variant:a,size:o,asChild:d=!1,...c}=e,h=d?l.DX:"button";return(0,r.jsx)(h,{className:(0,n.cn)(i({variant:a,size:o,className:s})),ref:t,...c})});d.displayName="Button"},2079:(e,t,s)=>{"use strict";s.d(t,{A0:()=>n,BF:()=>i,Hj:()=>d,XI:()=>o,nA:()=>h,nd:()=>c});var r=s(5155),a=s(2115),l=s(9602);let o=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{className:"w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",s),...a})})});o.displayName="Table";let n=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",s),...a})});n.displayName="TableHeader";let i=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",s),...a})});i.displayName="TableBody",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,l.cn)("bg-primary font-medium text-primary-foreground",s),...a})}).displayName="TableFooter";let d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...a})});d.displayName="TableRow";let c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...a})});c.displayName="TableHead";let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...a})});h.displayName="TableCell",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",s),...a})}).displayName="TableCaption"},9602:(e,t,s)=>{"use strict";s.d(t,{cn:()=>l});var r=s(3463),a=s(6458);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.Q)((0,r.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[52,297,441,517,358],()=>t(6856)),_N_E=e.O()}]);