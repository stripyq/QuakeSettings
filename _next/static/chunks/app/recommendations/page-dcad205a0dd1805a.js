(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{6856:(e,t,a)=>{Promise.resolve().then(a.bind(a,3882))},3882:(e,t,a)=>{"use strict";a.d(t,{default:()=>v});var r=a(5155),s=a(2115);let o=(0,s.createContext)(null),l={didCatch:!1,error:null};class i extends s.Component{static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){let{error:e}=this.state;if(null!==e){for(var t,a,r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];null===(t=(a=this.props).onReset)||void 0===t||t.call(a,{args:s,reason:"imperative-api"}),this.setState(l)}}componentDidCatch(e,t){var a,r;null===(a=(r=this.props).onError)||void 0===a||a.call(r,e,t)}componentDidUpdate(e,t){let{didCatch:a}=this.state,{resetKeys:r}=this.props;if(a&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,a)=>!Object.is(e,t[a]))}(e.resetKeys,r)){var s,o;null===(s=(o=this.props).onReset)||void 0===s||s.call(o,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(l)}}render(){let{children:e,fallbackRender:t,FallbackComponent:a,fallback:r}=this.props,{didCatch:l,error:i}=this.state,n=e;if(l){let e={error:i,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)n=t(e);else if(a)n=(0,s.createElement)(a,e);else if(void 0!==r)n=r;else throw i}return(0,s.createElement)(o.Provider,{value:{didCatch:l,error:i,resetErrorBoundary:this.resetErrorBoundary}},n)}constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=l}}var n=a(2079),d=a(4085),h=a(2442);let c=(0,a(3518).A)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]);var m=a(9789),u=a(9083);let g=[{mouse:"Razer DeathAdder V3 Pro",shape:"Ergonomic",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:128,width:68,height:44,weight:44,diamondLobby:!0,techless:!0,boardzy:!0,rocketJumpNinja:!0},{mouse:"Lamzu Maya X",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:124.4,width:64.9,height:39.6,weight:39.6,diamondLobby:!0,techless:!1,boardzy:!0,rocketJumpNinja:!0},{mouse:"Zowie U2",shape:"Symmetrical",humpPlacement:"Back - minimal",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:123.3,width:64.3,height:38.1,weight:38.1,diamondLobby:!0,techless:!0,boardzy:!0,rocketJumpNinja:!1},{mouse:"Endgame Gear OP1 8k",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Flat",handCompatibility:"Flat",length:118.2,width:60.5,height:37.2,weight:37.2,diamondLobby:!0,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Lamzu Maya",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:119,width:62,height:38,weight:38,diamondLobby:!0,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"Logitech G Pro X Superlight II",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Flat",length:125,width:63.5,height:40,weight:40,diamondLobby:!1,techless:!0,boardzy:!0,rocketJumpNinja:!1},{mouse:"Razer Viper V2 Pro",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - moderate",handCompatibility:"Inward",length:126.7,width:66,height:37.8,weight:37.8,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!0},{mouse:"ASUS ROG Harpe Ace",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Flat",length:127.5,width:63.7,height:39.6,weight:39.6,diamondLobby:!1,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"ATK X1 Ultimate",shape:"Symmetrical",humpPlacement:"Back - minimal",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:127,width:64,height:40,weight:40,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Endgame Gear XM2w 4k",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Flat",handCompatibility:"Inward - aggressive",length:122,width:66,height:38.5,weight:38.5,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Fantech Helios II Pro S",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:120,width:64,height:38.3,weight:38.3,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Finalmouse UltralightX",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - moderate",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!1,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"G-Wolves Hati S2 8K",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!1,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"Lamzu Atlantis",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Flat",handCompatibility:"Inward - aggressive",length:123,width:66,height:38,weight:38,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Logitech G Pro Hero",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Flat",length:null,width:null,height:null,weight:null,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Logitech G Pro X Superlight",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Flat",length:125,width:63.5,height:40,weight:40,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Logitech G203 Lightsync",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Inward - moderate",handCompatibility:"Flat",length:116.6,width:62.2,height:38.2,weight:38.2,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Logitech G305 Lightspeed",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Inward - moderate",handCompatibility:"Flat",length:116.6,width:62.2,height:38.2,weight:38.2,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Logitech G402 Hyperion Fury",shape:"Ergonomic",humpPlacement:"Back - minimal",sideCurvature:"Inward - slight",handCompatibility:"Inward",length:136,width:72,height:41,weight:41,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Ninjutso Sora V2",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:119.2,width:59.8,height:37.7,weight:37.7,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Pulsar X2H",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:120.4,width:65,height:39.1,weight:39.1,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Pulsar X2H eS",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:120.4,width:65,height:39.1,weight:39.1,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Pulsar X2H Medium",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!0,techless:!1,boardzy:!1,rocketJumpNinja:!1},{mouse:"Pulsar X2H Mini",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:115.6,width:62.4,height:37.9,weight:37.9,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Pulsar X2H V3 Medium",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!0,techless:!1,boardzy:!1,rocketJumpNinja:!1},{mouse:"Pulsar X2V2",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Flat",handCompatibility:"Flat",length:120,width:63,height:38,weight:38,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Pwnage StormBreaker",shape:"Ergonomic",humpPlacement:"Center",sideCurvature:"Outward - moderate",handCompatibility:"Inward",length:122,width:64,height:42,weight:42,diamondLobby:!1,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"Razer Viper V3 Pro",shape:"Symmetrical",humpPlacement:"Back - minimal",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:127.1,width:63.9,height:39.9,weight:39.9,diamondLobby:!1,techless:!1,boardzy:!1,rocketJumpNinja:!0},{mouse:"Santali S1-O",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Scyrox V8",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:118,width:63,height:38,weight:36,diamondLobby:!0,techless:!1,boardzy:!1,rocketJumpNinja:!1},{mouse:"VAXEE XE Wireless 4K",shape:"Symmetrical",humpPlacement:"Center",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!0,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"VAXEE ZYGEN NP-01S Wireless 4K",shape:"Hybrid",humpPlacement:"Back - moderate",sideCurvature:"Outward - moderate",handCompatibility:"Inward",length:120,width:63,height:37,weight:37,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Waizowl Cloud",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:null,width:null,height:null,weight:null,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Waizowl OGM Pro V2",shape:"Hybrid",humpPlacement:"Center",sideCurvature:"Flat",handCompatibility:"Flat",length:120,width:65,height:40,weight:40,diamondLobby:!1,techless:!0,boardzy:!1,rocketJumpNinja:!1},{mouse:"Zowie S2-DW",shape:"Symmetrical",humpPlacement:"Back - moderate",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:120,width:64.2,height:38.1,weight:38.1,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1},{mouse:"Zowie ZA13-DW",shape:"Symmetrical",humpPlacement:"Back - aggressive",sideCurvature:"Outward - slight",handCompatibility:"Inward",length:121.7,width:62.8,height:40.2,weight:40.2,diamondLobby:!1,techless:!1,boardzy:!0,rocketJumpNinja:!1}],p=[{mousepad:"Artisan HAYATE-OTSU",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+HAYATE-OTSU&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan HIEN",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+HIEN&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan Key-83",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+Key-83&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan RAIDEN",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+RAIDEN&linkCode=progamingge07-20&tag=ll2"},{mousepad:"Artisan Type-99",diamondLobby:!1,boardzy:!0,material:"Cloth",productLink:"https://www.amazon.de/s?k=Artisan+Type-99&linkCode=progamingge07-20&tag=ll2"}],b=[{keyboard:"Wooting 80HE",techless:!0,diamondLobby:!0,productLink:"https://wooting.io/wooting-80he?partner_id=quakesettings"},{keyboard:"Keychron Q1 HE",techless:!0,diamondLobby:!0,productLink:"https://www.amazon.de/s?k=Keychron+Q1+HE&linkCode=progamingge07-20&tag=ll2"},{keyboard:"MCHOSE Ace 60 Pro",techless:!1,diamondLobby:!1,productLink:"https://www.amazon.de/s?k=MCHOSE+Ace+60+Pro&linkCode=progamingge07-20&tag=ll2"},{keyboard:"ATK 68 V2",techless:!1,diamondLobby:!1,productLink:"https://www.amazon.de/s?k=hall+effect+keyboard+iso&linkCode=ll2&tag=progamingge07-20"},{keyboard:"Wooting 60HE",techless:!0,diamondLobby:!0,productLink:"https://wooting.io/wooting-60he?partner_id=quakesettings"}],y=[{monitor:"ASUS ROG Strix OLED XG27AQDMG",size:'27"',resolution:"2560\xd71440",panelTech:"OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!0},{monitor:"ASUS ROG Swift OLED PG27AQDP",size:'27"',resolution:"2560\xd71440",panelTech:"OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!0},{monitor:"MSI G274QPX",size:'27"',resolution:"2560\xd71440",panelTech:"Rapid IPS",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!0},{monitor:"Dell G2724D",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"165Hz",techless:!0,monitorsUnboxed:!0},{monitor:"LG 27GR83Q-B",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"165Hz",techless:!0,monitorsUnboxed:!0},{monitor:"Asus ROG Swift Pro PG248QP",size:'24"',resolution:"1920\xd71080",panelTech:"TN",refreshRate:"540Hz",techless:!1,monitorsUnboxed:!0},{monitor:"Asus ROG Swift PG27AQDP",size:'27"',resolution:"2560\xd71440",panelTech:"WOLED",refreshRate:"480Hz",techless:!1,monitorsUnboxed:!0},{monitor:"LG UltraGear 27GX790A (GX7)",size:'27"',resolution:"2560\xd71440",panelTech:"OLED",refreshRate:"480Hz",techless:!0,monitorsUnboxed:!1},{monitor:"Sony InZone M10S",size:'27"',resolution:"2560\xd71440",panelTech:"WOLED",refreshRate:"480Hz",techless:!0,monitorsUnboxed:!1},{monitor:"Asus ROG Swift PG27AQN",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"360Hz",techless:!1,monitorsUnboxed:!0},{monitor:"BenQ Zowie XL2566K",size:'24.5"',resolution:"1920\xd71080",panelTech:"TN",refreshRate:"360Hz",techless:!1,monitorsUnboxed:!0},{monitor:"ASUS ROG Swift PG32UCDP",size:'32"',resolution:"3840\xd72160",panelTech:"WOLED",refreshRate:"300Hz",techless:!1,monitorsUnboxed:!0},{monitor:"Asus TUF Gaming VG259QM",size:'25"',resolution:"1920\xd71080",panelTech:"IPS",refreshRate:"280Hz",techless:!1,monitorsUnboxed:!0},{monitor:"Acer XV271UM3",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"270Hz",techless:!0,monitorsUnboxed:!1},{monitor:"AOC AG276QZD2",size:'27"',resolution:"2560\xd71440",panelTech:"QD-OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"ASUS ROG Swift OLED PG32UCDP",size:'32"',resolution:"3840\xd72160",panelTech:"OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"BenQ Zowie XL2546X",size:'25"',resolution:"1920\xd71080",panelTech:"TN",refreshRate:"240Hz",techless:!1,monitorsUnboxed:!0},{monitor:"Gigabyte M27Q X",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"LG 27GS93QE",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"LG 32GS95UE",size:'32"',resolution:"3840\xd72160",panelTech:"WOLED",refreshRate:"240Hz (4K) / 480Hz (FHD)",techless:!0,monitorsUnboxed:!1},{monitor:"LG 34GS95QE-B",size:'34"',resolution:"3440\xd71440",panelTech:"OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"MSI 271QPX",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"MSI MAG 321UPX QD-OLED",size:'32"',resolution:"3840\xd72160",panelTech:"QD-OLED",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"ViewSonic XG2431",size:'24"',resolution:"1920\xd71080",panelTech:"IPS",refreshRate:"240Hz",techless:!0,monitorsUnboxed:!1},{monitor:"Gigabyte M27Q",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"170Hz",techless:!1,monitorsUnboxed:!0},{monitor:"ASUS ROG Strix XG27ACS",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"165Hz",techless:!0,monitorsUnboxed:!1},{monitor:"Dell Alienware AW3423DWF",size:'34"',resolution:"3440\xd71440",panelTech:"QD-OLED",refreshRate:"165Hz",techless:!0,monitorsUnboxed:!1},{monitor:"Koorui 24E3",size:'24"',resolution:"1920\xd71080",panelTech:"VA",refreshRate:"165Hz",techless:!0,monitorsUnboxed:!1},{monitor:"LG 27GP83B",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"165Hz",techless:!1,monitorsUnboxed:!0},{monitor:"MSI G274QPF-QD",size:'27"',resolution:"2560\xd71440",panelTech:"IPS",refreshRate:"165Hz",techless:!1,monitorsUnboxed:!0},{monitor:"KTC H24T09P",size:'24"',resolution:"1920\xd71080",panelTech:"IPS",refreshRate:"144Hz",techless:!0,monitorsUnboxed:!1},{monitor:"ASUS ROG Strix XG27AQMR",size:'27"',resolution:"2560\xd71440",panelTech:"Fast IPS",refreshRate:"240Hz (4K) / 480Hz (FHD)",techless:!1,monitorsUnboxed:!1}],x=[{accessorKey:"mouse",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Mouse"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})},cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[150px] font-medium",children:t.getValue("mouse")})}},{accessorKey:"shape",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Shape"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"humpPlacement",header:"Hump placement"},{accessorKey:"sideCurvature",header:"Side curvature"},{accessorKey:"handCompatibility",header:"Hand compatibility"},{accessorKey:"length",header:"Length (mm)",cell:e=>{let{row:t}=e,a=t.getValue("length");return(0,r.jsx)("div",{className:"font-mono text-right",children:null!=a?a.toString():"-"})}},{accessorKey:"width",header:"Width (mm)",cell:e=>{let{row:t}=e,a=t.getValue("width");return(0,r.jsx)("div",{className:"font-mono text-right",children:null!=a?a.toString():"-"})}},{accessorKey:"height",header:"Height (mm)",cell:e=>{let{row:t}=e,a=t.getValue("height");return(0,r.jsx)("div",{className:"font-mono text-right",children:null!=a?a.toString():"-"})}},{accessorKey:"weight",header:"Weight (g)",cell:e=>{let{row:t}=e,a=t.getValue("weight");return(0,r.jsx)("div",{className:"font-mono text-right",children:null!=a?a.toString():"-"})}},{accessorKey:"diamondLobby",header:"DiamondLobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"text-center",children:t.getValue("diamondLobby")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"techless",header:"techless",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"text-center",children:t.getValue("techless")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"boardzy",header:"boardzy",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"text-center",children:t.getValue("boardzy")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"rocketJumpNinja",header:"Rocket Jump Ninja",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"text-center",children:t.getValue("rocketJumpNinja")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}}],w=[{accessorKey:"mousepad",header:"Mousepad",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[300px]",children:(0,r.jsx)("a",{href:t.getValue("productLink"),className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:t.getValue("mousepad")})})}},{accessorKey:"material",header:"Material",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[100px]",children:t.getValue("material")||"N/A"})}},{accessorKey:"diamondLobby",header:"Diamond Lobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[70px] text-center",children:t.getValue("diamondLobby")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"boardzy",header:"boardzy",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[70px] text-center",children:t.getValue("boardzy")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}}],f=[{accessorKey:"keyboard",header:"Keyboard",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[300px]",children:(0,r.jsx)("a",{href:t.getValue("productLink"),className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:t.getValue("keyboard")})})}},{accessorKey:"techless",header:"techless",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("techless")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"diamondLobby",header:"Diamond Lobby",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("diamondLobby")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}}],j=[{accessorKey:"monitor",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Monitor"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"size",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Size"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"resolution",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Resolution"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"panelTech",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Panel Tech"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"refreshRate",header:e=>{let{column:t}=e;return(0,r.jsxs)(d.$,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),className:"px-2 h-full flex flex-col items-center justify-between",children:[(0,r.jsx)("span",{className:"font-bold",children:"Refresh Rate"}),(0,r.jsx)(h.A,{className:"h-4 w-4"})]})}},{accessorKey:"techless",header:"techless",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("techless")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}},{accessorKey:"monitorsUnboxed",header:"Monitors Unboxed",cell:e=>{let{row:t}=e;return(0,r.jsx)("div",{className:"w-[60px] text-center",children:t.getValue("monitorsUnboxed")?(0,r.jsx)(c,{className:"h-4 w-4 mx-auto"}):null})}}];function N(e){let{error:t,resetErrorBoundary:a}=e;return(0,r.jsxs)("div",{role:"alert",children:[(0,r.jsx)("p",{children:"Something went wrong:"}),(0,r.jsx)("pre",{children:t.message}),(0,r.jsx)("button",{onClick:a,children:"Try again"})]})}function v(){var e,t,a,o;let[l,d]=s.useState([]),[h,c]=s.useState([]),[v,C]=s.useState([]),[S,k]=s.useState([]),z=(0,m.N4)({data:g,columns:x,getCoreRowModel:(0,u.HT)(),onSortingChange:d,getSortedRowModel:(0,u.h5)(),state:{sorting:l}}),L=(0,m.N4)({data:p,columns:w,getCoreRowModel:(0,u.HT)(),onSortingChange:c,getSortedRowModel:(0,u.h5)(),state:{sorting:h}}),P=(0,m.N4)({data:b,columns:f,getCoreRowModel:(0,u.HT)(),onSortingChange:C,getSortedRowModel:(0,u.h5)(),state:{sorting:v}}),H=(0,m.N4)({data:y,columns:j,getCoreRowModel:(0,u.HT)(),onSortingChange:k,getSortedRowModel:(0,u.h5)(),state:{sorting:S}});return(0,r.jsxs)("main",{className:"container mx-auto py-6",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Gear Recommendations"}),(0,r.jsx)("p",{className:"text-gray-600 mb-6",children:"Various reviewers recommendations for gaming pc peripherals at the end of 2024. You DONT need this, but it's nice:)"}),(0,r.jsx)(i,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Gaming Mice"}),(0,r.jsx)("p",{className:"mb-4",children:"Comparison of selected gaming mice from relatively trusted sources."}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)(n.XI,{children:[(0,r.jsx)(n.A0,{children:z.getHeaderGroups().map(e=>(0,r.jsx)(n.Hj,{children:e.headers.map((e,t)=>(0,r.jsx)(n.nd,{className:"".concat(0===t?"sticky left-0 z-20 bg-background":""," p-0"),children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(n.BF,{children:(null===(e=z.getRowModel().rows)||void 0===e?void 0:e.length)?z.getRowModel().rows.map(e=>(0,r.jsx)(n.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map((e,t)=>(0,r.jsx)(n.nA,{className:0===t?"sticky left-0 bg-background":"",children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(n.Hj,{children:(0,r.jsx)(n.nA,{colSpan:x.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(i,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Mousepads"}),(0,r.jsx)("p",{className:"mb-4",children:"A selection of mousepads with different materials and surface types."}),(0,r.jsx)("div",{className:"overflow-x-auto max-w-fit",children:(0,r.jsxs)(n.XI,{children:[(0,r.jsx)(n.A0,{children:L.getHeaderGroups().map(e=>(0,r.jsx)(n.Hj,{children:e.headers.map(e=>(0,r.jsx)(n.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(n.BF,{children:(null===(t=L.getRowModel().rows)||void 0===t?void 0:t.length)?L.getRowModel().rows.map(e=>(0,r.jsx)(n.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(n.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(n.Hj,{children:(0,r.jsx)(n.nA,{colSpan:w.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(i,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Keyboards"}),(0,r.jsx)("p",{className:"mb-4",children:"A handpicked range of gaming keyboards evaluated by experienced reviewers."}),(0,r.jsx)("div",{className:"overflow-x-auto max-w-fit",children:(0,r.jsxs)(n.XI,{children:[(0,r.jsx)(n.A0,{children:P.getHeaderGroups().map(e=>(0,r.jsx)(n.Hj,{children:e.headers.map(e=>(0,r.jsx)(n.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(n.BF,{children:(null===(a=P.getRowModel().rows)||void 0===a?void 0:a.length)?P.getRowModel().rows.map(e=>(0,r.jsx)(n.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(n.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(n.Hj,{children:(0,r.jsx)(n.nA,{colSpan:f.length,className:"h-24 text-center",children:"No results."})})})]})})]})}),(0,r.jsx)(i,{FallbackComponent:N,children:(0,r.jsxs)("section",{className:"mb-10",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Monitors"}),(0,r.jsx)("p",{className:"mb-4",children:"A curated list of multiplayer gaming monitors with most important specs."}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)(n.XI,{children:[(0,r.jsx)(n.A0,{children:H.getHeaderGroups().map(e=>(0,r.jsx)(n.Hj,{children:e.headers.map(e=>(0,r.jsx)(n.nd,{className:"p-0",children:e.isPlaceholder?null:(0,m.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(n.BF,{children:(null===(o=H.getRowModel().rows)||void 0===o?void 0:o.length)?H.getRowModel().rows.map(e=>(0,r.jsx)(n.Hj,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(n.nA,{children:(0,m.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(n.Hj,{children:(0,r.jsx)(n.nA,{colSpan:j.length,className:"h-24 text-center",children:"No results."})})})]})})]})})]})}},4085:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var r=a(5155),s=a(2115),o=a(1290),l=a(1027),i=a(9602);let n=(0,l.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:l,asChild:d=!1,...h}=e,c=d?o.DX:"button";return(0,r.jsx)(c,{className:(0,i.cn)(n({variant:s,size:l,className:a})),ref:t,...h})});d.displayName="Button"},2079:(e,t,a)=>{"use strict";a.d(t,{A0:()=>i,BF:()=>n,Hj:()=>d,XI:()=>l,nA:()=>c,nd:()=>h});var r=a(5155),s=a(2115),o=a(9602);let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",a),...s})})});l.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",a),...s})});i.displayName="TableHeader";let n=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",a),...s})});n.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,o.cn)("bg-primary font-medium text-primary-foreground",a),...s})}).displayName="TableFooter";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});d.displayName="TableRow";let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});h.displayName="TableHead";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});c.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>o});var r=a(3463),s=a(6458);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.Q)((0,r.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[52,297,441,517,358],()=>t(6856)),_N_E=e.O()}]);