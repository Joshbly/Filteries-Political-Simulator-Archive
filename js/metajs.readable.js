
/* ============================================================================
   FILTERIES POLITICAL SIMULATOR - Deobfuscated Engine
   Original: metajs.js (obfuscated, BETA v0.4.19, 2018/05/02)
   ============================================================================ */

window["onload"]= function() {
  /* ---------- SECTOR COST MODELS ----------
     Each sector has: labco (labor cost), matco (material cost),
     locpro (local production), expro (export ratio).
     Runtime properties (ownz, funz, etc.) populated from sliders. */
  var sectors=[ {
    "id":"edu","labco":0.7744,"matco":0.1,"locpro":0.1256,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"med","labco":0.7044,"matco":0.13,"locpro":0.1656,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"bank","labco":0.5044,"matco":0.15,"locpro":0.3456,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"hea","labco":0.4344,"matco":0.35,"locpro":0.2156,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"ret","labco":0.3944,"matco":0.45,"locpro":0.1056,"expro":0.05,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"manu","labco":0.2944,"matco":0.4,"locpro":0.1556,"expro":0.15,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"infr","labco":0.2044,"matco":0.68,"locpro":0.1156,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"agr","labco":0.1444,"matco":0.7,"locpro":0.1056,"expro":0.05,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"nat","labco":0.1044,"matco":0.5,"locpro":0.0956,"expro":0.3,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"rea","labco":0.1244,"matco":0.65,"locpro":0.2256,"expro":0,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null
  }, {
    "id":"gov","labco":null,"matco":null,"locpro":null,"expro":null,"ownz":null,"funz":null,"incz":null,"incz2":null,"corz":null,"corz2":null,"impz":null,"expz":null,"consz":null,"sectgdpprc":null,"owfun1":null,"owfun2":null,"owfun3":null,"owfun4":null,"sectgdp":null,"cortx":null,"inctx":null,"imptx":null,"exptx":null,"constx":null,"pbinctx":null,"pbcortx":null,"prcx":null,"wagx":null,"wagrx":null,"pexx":null

  }];

  /* ---------- GOVERNMENT STRUCTURE LABELS ----------
     Maps sovereignty/autonomy/class combos to structure names */
  var structureLabels=[{"struc1":"Imperial","struc2":"","struc3":"World-State","struc4":"Anarcho-Imperialism","struc5":""},{"struc1":"Unitary","struc2":"Syndicalist","struc3":"Nation-State","struc4":"Anarcho-Unitarism","struc5":"Anarcho-Syndicalism"},{"struc1":"Federal","struc2":"Technocratic","struc3":"City-State","struc4":"Anarcho-Federation","struc5":"Anarcho-Technocracy"},{"struc1":"Confederal","struc2":"Militaristic","struc3":"","struc4":"Anarcho-Confederation","struc5":"Armed Forces"},{"struc1":"Supranational","struc2":"Corporatist","struc3":"","struc4":"Individualist Anarchism","struc5":"Corporation"},{"struc1":"","struc2":"Theocratic","struc3":"Continental Union","struc4":"Anarcho-Continentalism","struc5":"Anarcho-Theocracy"},{"struc1":"","struc2":"Aristocratic","struc3":"Trade Company","struc4":"Anarcho-Mercantilism","struc5":"Anarcho-Aristocracy"},{"struc1":"","struc2":"Noocratic","struc3":"Orbital","struc4":"Anarcho-Orbitalism","struc5":"Anarcho-Noocracy"},{"struc1":"","struc2":"Plutocratic","struc3":"Cyber-State","struc4":"Anarcho-Cyberism","struc5":"Anarcho-Plutocracy"},{"struc1":"","struc2":"Single-Party","struc3":"Nomadic Territory","struc4":"Anarcho-Nomadism","struc5":"Anarcho-Collectivism"},{"struc1":"","struc2":"Cybernetic","struc3":"","struc4":"","struc5":"Anarcho-Cybernetics"}];

  /* ---------- GOVERNMENT SYSTEM LABELS ----------
     Maps executive/legislative/judicial selections to system names */
  var govSystemLabels=[ {
    "dirz":"Direct Democracy","elez":"Participatory Democracy","appz":"Participatory Democracy","exez":"Pure Democracy","sorz":"Sortition Democracy","corpz":"Corporate Democracy","relz":"Theocratic Democracy","herz":"Hereditary Democracy","milz":"Military Democracy","algoz":"Algorithmic Democracy"
  }, {
    "dirz":"Participatory Democracy","elez":"Presidential Republic","appz":"Semi-Presidential Republic","exez":"Dictatorial Republic","sorz":"Sortition Republic","corpz":"Corporate Republic","relz":"Theocratic Republic","herz":"Hereditary Republic","milz":"Military Republic","algoz":"Algorithmic Republic"
  }, {
    "dirz":"Participatory Democracy","elez":"Parliamental Republic","appz":"One-Party State","exez":"Dictatorial One Party State","sorz":"Sortition One-Party State","corpz":"Corporate One-Party State","relz":"Theocratic One-Party State","herz":"Hereditary One-Party State","milz":"Military One-Party State","algoz":"Algorithmic One-Party State"
  }, {
    "dirz":"Dynastic Participatory Democracy","elez":"Dynastic Parliamental Republic","appz":"Dynastic State","exez":"Dictatorial Dynastic State","sorz":"Dynastic Sortition State","corpz":"Dynastic Corporate State","relz":"Dynastic Theocratic State","herz":"Dynastic Hereditary State","milz":"Dynastic Military State","algoz":"Dynastic Algorithmic State"
  }, {
    "dirz":"","elez":"Military Junta","appz":"Military Junta","exez":"Military Dictatorship","sorz":"Military Sortition State","corpz":"Military Corporate State","relz":"Military Theocratic State","herz":"Military Hereditary State","milz":"Military State","algoz":"Military Algorithmic State"
  }, {
    "dirz":"Sortition Democracy","elez":"Sortition Republic","appz":"Sortition Republic","exez":"Sortition State","sorz":"Pure Sortition State","corpz":"Sortition Corporate State","relz":"Sortition Theocratic State","herz":"Sortition Hereditary State","milz":"Sortition Military State","algoz":"Sortition Algorithmic State"
  }, {
    "dirz":"Corporate Democracy","elez":"Corporate Republic","appz":"Corporate State","exez":"Corporate Dictatorship","sorz":"Corporate Sortition State","corpz":"Corporate Oligarchy","relz":"Corporate Theocratic State","herz":"Corporate Hereditary State","milz":"Corporate Military State","algoz":"Corporate Algorithmic State"
  }, {
    "dirz":"Theocratic Democracy","elez":"Theocratic Republic","appz":"Theocratic State","exez":"Theocratic Dictatorship","sorz":"Theocratic Sortition State","corpz":"Theocratic Corporate State","relz":"Pure Theocracy","herz":"Theocratic Hereditary State","milz":"Theocratic Military State","algoz":"Theocratic Algorithmic State"
  }, {
    "dirz":"","elez":"","appz":"","exez":"","sorz":"","corpz":"","relz":"","herz":"","milz":"","algoz":""
  }, {
    "dirz":"Algorithmic Democracy","elez":"Algorithmic Republic","appz":"Algorithmic State","exez":"Algorithmic Dictatorship","sorz":"Algorithmic Sortition State","corpz":"Algorithmic Corporate State","relz":"Algorithmic Theocratic State","herz":"Algorithmic Hereditary State","milz":"Algorithmic Military State","algoz":"Pure Algorithmic State"
  }];
  var monarchyLabels=[ {
    "dirz":"","elez":"","appz":"","exez":"","sorz":"","corpz":"","relz":"","herz":"","milz":"","algoz":""
  }, {
    "dirz":"Participatory Republican Monarchy","elez":"Republican Monarchy","appz":"Republican Monarchy","exez":"Dictatorial Republican Monarchy","sorz":"Sortition Monarchy","corpz":"Corporate Monarchy","relz":"Theocratic Monarchy","herz":"Hereditary Republican Monarchy","milz":"Military Monarchy","algoz":"Algorithmic Monarchy"
  }, {
    "dirz":"Participatory Monarchy","elez":"Parliamental Monarchy","appz":"Elective Monarchy","exez":"Dictatorial Elective Monarchy","sorz":"Sortition Elective Monarchy","corpz":"Corporate Elective Monarchy","relz":"Theocratic Elective Monarchy","herz":"Hereditary Elective Monarchy","milz":"Military Elective Monarchy","algoz":"Algorithmic Elective Monarchy"
  }, {
    "dirz":"Participatory Hereditary Monarchy","elez":"Parliamental Hereditary Monarchy","appz":"Hereditary Monarchy","exez":"Dictatorial Hereditary Monarchy","sorz":"Sortition Hereditary Monarchy","corpz":"Corporate Hereditary Monarchy","relz":"Theocratic Hereditary Monarchy","herz":"Pure Hereditary Monarchy","milz":"Military Hereditary Monarchy","algoz":"Algorithmic Hereditary Monarchy"
  }, {
    "dirz":"","elez":"Military Autocracy","appz":"Military Autocracy","exez":"Military Despotism","sorz":"Military Sortition Autocracy","corpz":"Military Corporate Autocracy","relz":"Military Theocratic Autocracy","herz":"Military Hereditary Autocracy","milz":"Military Autocracy","algoz":"Military Algorithmic Autocracy"
  }, {
    "dirz":"Sortition Autocracy","elez":"Sortition Principality","appz":"Sortition Principality","exez":"Sortition Despotism","sorz":"Pure Sortition Principality","corpz":"Corporate Sortition Autocracy","relz":"Theocratic Sortition Autocracy","herz":"Hereditary Sortition Autocracy","milz":"Military Sortition Autocracy","algoz":"Algorithmic Sortition Autocracy"
  }, {
    "dirz":"Corporate Autocracy","elez":"Corporate Principality","appz":"Corporate Autocracy","exez":"Corporate Despotism","sorz":"Corporate Sortition Autocracy","corpz":"Corporate Oligarchic Autocracy","relz":"Corporate Theocratic Autocracy","herz":"Corporate Hereditary Autocracy","milz":"Corporate Military Autocracy","algoz":"Corporate Algorithmic Autocracy"
  }, {
    "dirz":"Theocratic Autocracy","elez":"Theocratic Principality","appz":"Theocratic Autocracy","exez":"Theocratic Despotism","sorz":"Theocratic Sortition Autocracy","corpz":"Theocratic Corporate Autocracy","relz":"Pure Theocratic Autocracy","herz":"Theocratic Hereditary Autocracy","milz":"Theocratic Military Autocracy","algoz":"Theocratic Algorithmic Autocracy"
  }, {
    "dirz":"","elez":"","appz":"","exez":"","sorz":"","corpz":"","relz":"","herz":"","milz":"","algoz":""
  }, {
    "dirz":"Algorithmic Autocracy","elez":"Algorithmic Principality","appz":"Algorithmic Autocracy","exez":"Algorithmic Despotism","sorz":"Algorithmic Sortition Autocracy","corpz":"Algorithmic Corporate Autocracy","relz":"Algorithmic Theocratic Autocracy","herz":"Algorithmic Hereditary Autocracy","milz":"Algorithmic Military Autocracy","algoz":"Pure Algorithmic Autocracy"
  }];

  /* ---------- CHART VISUAL ASSETS ---------- */
  var chartAssets=[ {
    "chaz":"dist419/images/cha3.svg","linez":"dist419/images/line1.svg","lblz":"dist419/images/lblz.svg","shadz":"dist419/images/shad1.svg"
  }, {
    "chaz":"dist419/images/cha2.svg","linez":"dist419/images/line3.svg","lblz":"","shadz":""
  }, {
    "chaz":"dist419/images/cha4.svg","linez":"dist419/images/line2.svg","lblz":"","shadz":""
  }, {
    "chaz":"dist419/images/cha1.svg","linez":"dist419/images/line4.svg","lblz":"","shadz":""
  }, {
    "chaz":"dist419/images/cha5.svg","linez":"","lblz":"","shadz":""

  }];

  /* ---------- SELECTOR STATE TRACKING ---------- */
  var selectorStates=[ {
    "valz":null,"id":"sov"
  }, {
    "valz":null,"id":"auto"
  }, {
    "valz":null,"id":"govg"
  }, {
    "valz":null,"id":"govc"
  }, {
    "valz":null,"id":"syse"
  }, {
    "valz":null,"id":"sysl"
  }, {
    "valz":null,"id":"sysj"
  }, {
    "valz":null,"id":"rel"
  }, {
    "valz":null,"id":"for"
  }, {
    "valz":null,"id":"cons"
  }, {
    "valz":null,"id":"righ"
  }, {
    "valz":null,"id":"minw"
  }, {
    "valz":null,"id":"minw2"
  }, {
    "valz":null,"id":"pensreg"
  }, {
    "valz":null,"id":"centow"
  }, {
    "valz":null,"id":"murd"
  }, {
    "valz":null,"id":"rape"
  }, {
    "valz":null,"id":"steal"
  }, {
    "valz":null,"id":"child"
  }, {
    "valz":null,"id":"defa"
  }, {
    "valz":null,"id":"incit"
  }, {
    "valz":null,"id":"stprost"
  }, {
    "valz":null,"id":"broth"
  }, {
    "valz":null,"id":"esco"
  }, {
    "valz":null,"id":"hand"
  }, {
    "valz":null,"id":"shot"
  }, {
    "valz":null,"id":"rifle"
  }, {
    "valz":null,"id":"casin"
  }, {
    "valz":null,"id":"oncasin"
  }, {
    "valz":null,"id":"sports"
  }, {
    "valz":null,"id":"homogen"
  }, {
    "valz":null,"id":"homoad"
  }, {
    "valz":null,"id":"transgen"
  }, {
    "valz":null,"id":"transad"
  }, {
    "valz":null,"id":"tobus"
  }, {
    "valz":null,"id":"tobsel"
  }, {
    "valz":null,"id":"alcus"
  }, {
    "valz":null,"id":"alcsel"
  }, {
    "valz":null,"id":"canus"
  }, {
    "valz":null,"id":"cansel"
  }, {
    "valz":null,"id":"psyus"
  }, {
    "valz":null,"id":"psysel"
  }, {
    "valz":null,"id":"stius"
  }, {
    "valz":null,"id":"stisel"
  }, {
    "valz":null,"id":"opius"
  }, {
    "valz":null,"id":"opisel"
  }, {
    "valz":null,"id":"euth"
  }, {
    "valz":null,"id":"obsc"
  }, {
    "valz":null,"id":"warc"
  }, {
    "valz":null,"id":"corf"
  }, {
    "valz":null,"id":"blasph"
  }, {
    "valz":null,"id":"treas"
  }, {
    "valz":null,"id":"embe"
  }, {
    "valz":null,"id":"misce"
  }, {
    "valz":null,"id":"disse"
  }, {
    "valz":null,"id":"surv"
  }, {
    "valz":null,"id":"datap"
  }, {
    "valz":null,"id":"encry"
  }, {
    "valz":null,"id":"union"
  }, {
    "valz":null,"id":"childlab"
  }, {
    "valz":null,"id":"ipprop"
  }, {
    "valz":null,"id":"trial"
  }, {
    "valz":null,"id":"prison"
  }, {
    "valz":null,"id":"polover"  }, {
    "valz":null,"id":"lottery"  }, {
    "valz":null,"id":"cryptogamb"  }, {
    "valz":null,"id":"autoweap"  }, {
    "valz":null,"id":"explos"  }, {
    "valz":null,"id":"conceal"  }, {
    "valz":null,"id":"onprost"  }, {
    "valz":null,"id":"surrog"  }, {
    "valz":null,"id":"cyber"  }, {
    "valz":null,"id":"hatecr"  }, {
    "valz":null,"id":"corrupt"  }, {
    "valz":null,"id":"gestlim"  }, {
    "valz":null,"id":"abortwait"  }, {
    "valz":null,"id":"abortfund"  }, {
    "valz":null,"id":"lootbox"  }, {
    "valz":null,"id":"childgamb"  }, {
    "valz":null,"id":"compulsed"  }, {
    "valz":null,"id":"religed"  }, {
    "valz":null,"id":"homeschool"  }, {
    "valz":null,"id":"sexed"  }, {
    "valz":null,"id":"curriculum"  }, {
    "valz":null,"id":"healthsys"  }, {
    "valz":null,"id":"mentalh"  }, {
    "valz":null,"id":"vacc"  }, {
    "valz":null,"id":"marriage"  }, {
    "valz":null,"id":"divorce"  }, {
    "valz":null,"id":"polygamy"  }, {
    "valz":null,"id":"ageconsent"  }, {
    "valz":null,"id":"pressf"  }, {
    "valz":null,"id":"assembly"  }, {
    "valz":null,"id":"censor"  }, {
    "valz":null,"id":"slavery"  }, {
    "valz":null,"id":"citizen"
  }, {
    "valz":null,"id":"citizenpath"  }, {
    "valz":null,"id":"deathpen"  }, {
    "valz":null,"id":"socredit"  }, {
    "valz":null,"id":"housing"  }, {
    "valz":null,"id":"landow"  }, {
    "valz":null,"id":"eminent"  }, {
    "valz":null,"id":"homeless"  }, {
    "valz":null,"id":"carbpol"  }, {
    "valz":null,"id":"nucpol"  }, {
    "valz":null,"id":"animal"  }, {
    "valz":null,"id":"gmo"  }, {
    "valz":null,"id":"water"  }, {
    "valz":null,"id":"statemedia"  }, {
    "valz":null,"id":"langpol"  }, {
    "valz":null,"id":"artscult"  }, {
    "valz":null,"id":"hatespeech"  }, {
    "valz":null,"id":"transit"  }, {
    "valz":null,"id":"roads"  }, {
    "valz":null,"id":"autodrive"  }, {
    "valz":null,"id":"space"  }, {
    "valz":null,"id":"crypto"  }, {
    "valz":null,"id":"bankrupt"  }, {
    "valz":null,"id":"ubitype"  }, {
    "valz":null,"id":"wealthtax"  }, {
    "valz":null,"id":"statebank"  }, {
    "valz":null,"id":"airegul"  }, {
    "valz":null,"id":"cloning"  }, {
    "valz":null,"id":"stemcell"  }, {
    "valz":null,"id":"genedit"  }, {
    "valz":null,"id":"dataown"
  }, {
    "valz":null,"id":"taxloop"
  }, {
    "valz":null,"id":"taxenforce"
  }, {
    "valz":null,"id":"paramilitary"
  }, {
    "valz":null,"id":"moralpolice"
  }, {
    "valz":null,"id":"moralscope"
  }, {
    "valz":null,"id":"moralpenalty"
  }, {
    "valz":null,"id":"mifu"
  }, {
    "valz":null,"id":"imman"
  }, {
    "valz":null,"id":"immst"
  }, {
    "valz":null,"id":"immwo"
  }, {
    "valz":null,"id":"immas"
  }, {
    "valz":null,"id":"immref"
  }, {
    "valz":null,"id":"inher"
  }, {
    "valz":null,"id":"reserv"
  }, {
    "valz":null,"id":"pover"
  }, {
    "valz":null,"id":"unemp"
  }, {
    "valz":null,"id":"pens"
  }, {
    "valz":null,"id":"mininc"
  }, {
    "valz":null,"id":"basinc"
  }, {
    "valz":null,"id":"wast"
  }, {
    "valz":null,"id":"pubpa"
  }, {
    "valz":null,"id":"conser"
  }, {
    "valz":null,"id":"solar"
  }, {
    "valz":null,"id":"nucl"
  }, {
    "valz":null,"id":"rnd"
  }, {
    "valz":null,"id":"votr"
  }, {
    "valz":null,"id":"entreq"
  }, {
    "valz":null,"id":"envreg"
  }, {
    "valz":null,"id":"womrig"
  }, {
    "valz":null,"id":"centfun"
  }, {
    "valz":null,"id":"abort"
  }, {
    "valz":null,"id":"fabort"

  }];

  /* ---------- POLITICAL SPECTRUM WEIGHT TABLES ----------
     9 tables mapping each policy input to its effect on a political axis.
     Formula: weight * (sliderValue / 100) = axis contribution.
     null = no effect on that axis. */
  var spectrumWeightsX=[{"sov":15,"auto":0,"govg":13.4,"govc":0,"syse":0,"sysl":0,"sysj":0,"rel":2.1,"for":0,"cons":5,"righ":0.8,"minw":0.8,"minw2":1.3,"pensreg":0.7,"centow":1.3,"murd":-2,"rape":-2,"steal":-1,"child":-2,"defa":-0.5,"incit":-0.5,"stprost":-1,"broth":-1,"esco":-1,"hand":-2,"shot":-2,"rifle":-2,"casin":-0.5,"oncasin":-0.5,"sports":-0.5,"homogen":-1,"homoad":-1,"transgen":-1,"transad":-1,"tobus":-0.5,"tobsel":-0.5,"alcus":-0.5,"alcsel":-0.5,"canus":-0.5,"cansel":-0.5,"psyus":-0.5,"psysel":-0.5,"stius":-0.5,"stisel":-0.5,"opius":-0.5,"opisel":-0.5,"euth":-1.5,"obsc":-0.5,"warc":-1,"corf":-1,"blasph":-0.3,"treas":-1,"embe":-1,"misce":-0.5,"disse":-1,"mifu":0,"imman":1,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":0,"reserv":0,"pover":0,"unemp":0,"pens":0,"mininc":0,"basinc":0,"wast":0,"pubpa":0,"conser":0,"solar":0,"nucl":0,"rnd":0,"votr":0.6,"entreq":0.4,"envreg":0.25,"womrig":-1,"centfun":0.7,"abort":-3.9,"fabort":1.2,"surv":4,"datap":-2,"encry":-2,"union":3,"childlab":-2,"ipprop":1.5,"trial":-0.5,"prison":-1,"polover":-1.5,"compulsed":-2,"religed":3,"homeschool":-1.5,"sexed":-0.5,"curriculum":3,"healthsys":6,"mentalh":2,"vacc":4,"marriage":-0.5,"divorce":-0.5,"polygamy":-1,"ageconsent":-3,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":-1,"deathpen":-0.5,"socredit":-1,"housing":4,"landow":5,"eminent":-2,"homeless":3,"carbpol":3,"nucpol":2,"animal":2.5,"gmo":-1,"water":4,"statemedia":-1,"langpol":0,"artscult":-0.5,"hatespeech":0,"transit":5,"roads":3,"autodrive":3,"space":4,"crypto":-3,"bankrupt":-1.5,"ubitype":3,"wealthtax":0,"statebank":5,"airegul":-2,"cloning":-2,"stemcell":3,"genedit":-2.5,"dataown":-2,"taxloop":6,"citizenpath":-2,"paramilitary":0,"moralpolice":0,"moralscope":2,"moralpenalty":0,"autoweap":-3,"explos":-3,"conceal":-2,"onprost":-1,"lottery":-0.5,"cryptogamb":-0.5,"surrog":-1,"cyber":-1,"corrupt":-1.5},{"sov":5,"auto":0,"govg":13.4,"govc":1.2,"syse":1.6,"sysl":1.3,"sysj":1.3,"rel":0,"for":0.5,"cons":-1,"righ":0,"minw":0.5,"minw2":0,"pensreg":0.5,"centow":1,"murd":1,"rape":1,"steal":0.5,"child":1,"defa":0.5,"incit":0.5,"stprost":-0.3,"broth":-0.3,"esco":-0.3,"hand":-1,"shot":-1,"rifle":-1,"casin":-0.2,"oncasin":-0.2,"sports":-0.2,"homogen":0,"homoad":2,"transgen":0,"transad":0.5,"tobus":-0.2,"tobsel":-0.2,"alcus":-0.2,"alcsel":-0.2,"canus":-0.2,"cansel":-0.2,"psyus":-0.2,"psysel":-0.2,"stius":-0.2,"stisel":-0.2,"opius":-0.2,"opisel":-0.2,"euth":-0.5,"obsc":0.5,"warc":0.5,"corf":1,"blasph":1,"treas":1,"embe":1,"misce":1,"disse":2,"mifu":2.5,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":0.5,"pover":0,"unemp":0,"pens":0,"mininc":0,"basinc":0,"wast":0,"pubpa":0,"conser":0,"solar":0,"nucl":0,"rnd":0,"votr":1,"entreq":0.4,"envreg":0.25,"womrig":-2.2,"centfun":0.7,"abort":-0.7,"fabort":1.2,"surv":0,"datap":-0.5,"encry":2,"union":1,"childlab":0,"ipprop":0.5,"trial":1,"prison":0,"polover":0,"compulsed":1,"religed":0,"homeschool":0,"sexed":0.5,"curriculum":1,"healthsys":4,"mentalh":0.5,"vacc":2,"marriage":0,"divorce":1,"polygamy":0,"ageconsent":-1,"pressf":1.5,"assembly":1.5,"censor":1,"slavery":2,"citizen":1,"deathpen":0,"socredit":1,"housing":2,"landow":3,"eminent":0.5,"homeless":1,"carbpol":2,"nucpol":1,"animal":1,"gmo":-0.3,"water":2,"statemedia":1,"langpol":1,"artscult":0.5,"hatespeech":1.5,"transit":2.5,"roads":1,"autodrive":0,"space":1.5,"crypto":-1,"bankrupt":0,"ubitype":1.5,"wealthtax":1,"statebank":3,"airegul":-0.5,"cloning":0,"stemcell":0,"genedit":-1,"dataown":-0.5,"taxloop":4,"citizenpath":-0.5,"paramilitary":1,"moralpolice":3,"moralscope":5,"moralpenalty":2,"autoweap":-1.5,"explos":-1,"conceal":-0.5,"onprost":-0.3,"lottery":2,"cryptogamb":-0.2,"surrog":-0.3,"cyber":1,"corrupt":1},{"sov":3,"auto":0,"govg":null,"govc":3.4,"syse":2.1,"sysl":2.1,"sysj":1.7,"rel":2.1,"for":1.9,"cons":null,"righ":0,"minw":0,"minw2":null,"pensreg":0,"centow":0,"murd":3,"rape":3,"steal":2,"child":3,"defa":1.5,"incit":2,"stprost":1,"broth":1,"esco":1,"hand":-0.5,"shot":-0.5,"rifle":-0.5,"casin":0.5,"oncasin":0.5,"sports":0.5,"homogen":1,"homoad":null,"transgen":1,"transad":3,"tobus":0,"tobsel":0.5,"alcus":0,"alcsel":0.5,"canus":0,"cansel":0.5,"psyus":0,"psysel":0.5,"stius":0,"stisel":0.5,"opius":0,"opisel":0.5,"euth":0,"obsc":2,"warc":2,"corf":3,"blasph":3,"treas":3,"embe":2.5,"misce":2.5,"disse":5,"mifu":5,"imman":-3.5,"immst":1,"immwo":1,"immas":1,"immref":1,"inher":8,"reserv":2,"pover":8,"unemp":8,"pens":7,"mininc":9,"basinc":14,"wast":2,"pubpa":1.5,"conser":3,"solar":3,"nucl":3,"rnd":3,"votr":1.3,"entreq":0.8,"envreg":0.25,"womrig":-1,"centfun":1.15,"abort":-0.7,"fabort":1.2,"surv":-3,"datap":1.5,"encry":5,"union":0,"childlab":1.5,"ipprop":-0.5,"trial":4,"prison":2.5,"polover":3,"compulsed":2.5,"religed":-1,"homeschool":1.5,"sexed":2,"curriculum":-0.5,"healthsys":2,"mentalh":-0.5,"vacc":0.5,"marriage":1,"divorce":0.5,"polygamy":1.5,"ageconsent":0,"pressf":4,"assembly":4,"censor":3,"slavery":5,"citizen":3,"deathpen":1.5,"socredit":4,"housing":1,"landow":0,"eminent":3,"homeless":-0.5,"carbpol":0.5,"nucpol":-0.5,"animal":0,"gmo":0.5,"water":0,"statemedia":4,"langpol":3,"artscult":2,"hatespeech":3,"transit":0,"roads":-1.5,"autodrive":-1,"space":-1,"crypto":1.5,"bankrupt":1.5,"ubitype":1,"wealthtax":3,"statebank":1,"airegul":1,"cloning":4,"stemcell":-0.5,"genedit":0,"dataown":0.5,"taxloop":2,"citizenpath":1,"paramilitary":3,"moralpolice":8,"moralscope":10,"moralpenalty":4,"autoweap":-0.5,"explos":1,"conceal":0.5,"onprost":1,"lottery":0,"cryptogamb":1,"surrog":0.5,"cyber":3,"corrupt":3},{"sov":-10,"auto":0,"govg":null,"govc":4.7,"syse":2.8,"sysl":3.2,"sysj":2.2,"rel":null,"for":3.7,"cons":null,"righ":1.9,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":5,"rape":5,"steal":4,"child":5,"defa":3,"incit":4,"stprost":2.5,"broth":2.5,"esco":2.5,"hand":0,"shot":0,"rifle":0,"casin":2,"oncasin":2,"sports":2,"homogen":2.5,"homoad":null,"transgen":2.5,"transad":null,"tobus":0.3,"tobsel":1,"alcus":0.3,"alcsel":1,"canus":0.3,"cansel":1,"psyus":0.5,"psysel":1.5,"stius":0.5,"stisel":1.5,"opius":0.5,"opisel":1.5,"euth":0.5,"obsc":4,"warc":4,"corf":5,"blasph":5,"treas":5,"embe":4,"misce":4,"disse":8,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":1.3,"entreq":0.8,"envreg":0.25,"womrig":-1.8,"centfun":null,"abort":-0.7,"fabort":null,"surv":null,"datap":4,"encry":null,"union":-1.5,"childlab":null,"ipprop":-2,"trial":0.5,"prison":5,"polover":null,"compulsed":4,"religed":-3,"homeschool":4,"sexed":1,"curriculum":-2,"healthsys":0.5,"mentalh":-2,"vacc":-0.5,"marriage":3,"divorce":4,"polygamy":3,"ageconsent":0.5,"pressf":8,"assembly":8,"censor":7,"slavery":12,"citizen":5,"deathpen":4,"socredit":10,"housing":0,"landow":-2,"eminent":7,"homeless":-1,"carbpol":-1,"nucpol":-2,"animal":-2,"gmo":2,"water":-3,"statemedia":8,"langpol":6,"artscult":4,"hatespeech":6,"transit":-2,"roads":-4,"autodrive":-3,"space":-2,"crypto":5,"bankrupt":3,"ubitype":-1,"wealthtax":5,"statebank":-8,"airegul":3,"cloning":null,"stemcell":4,"genedit":1.5,"dataown":5,"taxloop":0,"citizenpath":0.5,"paramilitary":6,"moralpolice":14,"moralscope":18,"moralpenalty":8,"autoweap":0,"explos":3,"conceal":1.5,"onprost":2.5,"lottery":1.5,"cryptogamb":2.5,"surrog":1.5,"cyber":5,"corrupt":6},{"sov":null,"auto":0,"govg":null,"govc":3.4,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":4.9,"cons":null,"righ":2.7,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":8,"rape":8,"steal":6,"child":8,"defa":5,"incit":7,"stprost":4,"broth":4,"esco":4,"hand":1,"shot":1,"rifle":1,"casin":3.5,"oncasin":3.5,"sports":3.5,"homogen":4,"homoad":null,"transgen":4,"transad":null,"tobus":1,"tobsel":2.5,"alcus":1,"alcsel":2.5,"canus":1,"cansel":2.5,"psyus":1.5,"psysel":3,"stius":1.5,"stisel":3,"opius":1.5,"opisel":3,"euth":2.5,"obsc":6,"warc":7,"corf":7,"blasph":8,"treas":8,"embe":6,"misce":6,"disse":12,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":0.65,"womrig":0.6,"centfun":null,"abort":-0.7,"fabort":null,"surv":null,"datap":null,"encry":null,"union":-3,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":-3,"mentalh":null,"vacc":-2,"marriage":4,"divorce":null,"polygamy":null,"ageconsent":3,"pressf":null,"assembly":null,"censor":12,"slavery":null,"citizen":0.6,"deathpen":null,"socredit":null,"housing":-2,"landow":2,"eminent":null,"homeless":null,"carbpol":-3,"nucpol":null,"animal":null,"gmo":4,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":-4,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":7,"statebank":null,"airegul":6,"cloning":null,"stemcell":null,"genedit":5,"dataown":null,"taxloop":-2,"citizenpath":4,"paramilitary":12,"moralpolice":20,"moralscope":null,"moralpenalty":14,"autoweap":1.5,"explos":5,"conceal":3.5,"onprost":4,"lottery":3.5,"cryptogamb":4,"surrog":3,"cyber":8,"corrupt":10},{"sov":10,"auto":null,"govg":null,"govc":3.4,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":7,"broth":7,"esco":7,"hand":3,"shot":3,"rifle":3,"casin":6,"oncasin":6,"sports":6,"homogen":6,"homoad":null,"transgen":6,"transad":null,"tobus":2.5,"tobsel":4,"alcus":2.5,"alcsel":4,"canus":2.5,"cansel":4,"psyus":3,"psysel":5,"stius":3,"stisel":5,"opius":3,"opisel":5,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":0.6,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":-5,"mentalh":null,"vacc":null,"marriage":-2,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":9,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-6,"citizenpath":3,"paramilitary":18,"moralpolice":null,"moralscope":null,"moralpenalty":22,"autoweap":4,"explos":8,"conceal":6,"onprost":7},{"sov":-5,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":5,"shot":5,"rifle":5,"casin":null,"oncasin":null,"sports":null,"homogen":10,"homoad":null,"transgen":10,"transad":null,"tobus":4,"tobsel":7,"alcus":4,"alcsel":7,"canus":4,"cansel":7,"psyus":5,"psysel":8,"stius":5,"stisel":8,"opius":5,"opisel":8,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":11,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-10,"paramilitary":25,"moralpolice":null,"moralscope":null,"moralpenalty":null,"autoweap":7},{"sov":-3,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":2,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":8,"shot":8,"rifle":8,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":7,"tobsel":null,"alcus":7,"alcsel":null,"canus":7,"cansel":null,"psyus":8,"psysel":null,"stius":8,"stisel":null,"opius":8,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.4,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":14,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-16,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null,"autoweap":10},{"sov":-12,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":14,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-22,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null},{"sov":-8,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":14,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":14,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null}];
  var spectrumWeightsY=[{"sov":-5,"auto":24.3,"govg":0,"govc":-0.5,"syse":0,"sysl":0,"sysj":0,"rel":-2,"for":-1,"cons":1.5,"righ":0,"minw":0,"minw2":0,"pensreg":0,"centow":0,"murd":-1,"rape":-1,"steal":-0.5,"child":-1,"defa":-0.3,"incit":-0.3,"stprost":-1,"broth":-1,"esco":-1,"hand":2,"shot":2,"rifle":2,"casin":-0.5,"oncasin":-0.5,"sports":-0.5,"homogen":-3,"homoad":-2,"transgen":-3,"transad":-2,"tobus":-0.3,"tobsel":-0.3,"alcus":-0.3,"alcsel":-0.3,"canus":-0.3,"cansel":-0.3,"psyus":-0.3,"psysel":-0.3,"stius":-0.3,"stisel":-0.3,"opius":-0.3,"opisel":-0.3,"euth":-2,"obsc":-0.3,"warc":-0.5,"corf":-0.5,"blasph":0,"treas":-0.5,"embe":-0.5,"misce":-0.3,"disse":-0.5,"mifu":0,"imman":1,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":-2,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0.4,"entreq":0.4,"envreg":-0.6,"womrig":1.5,"centfun":-0.7,"abort":1.5,"fabort":-1.2,"surv":2,"datap":-1.5,"encry":-1.5,"union":-4,"childlab":2,"ipprop":2,"trial":-0.5,"prison":-2,"polover":-1.5,"compulsed":1,"religed":3,"homeschool":1,"sexed":-1.5,"curriculum":-1,"healthsys":-4,"mentalh":-1.5,"vacc":-1,"marriage":-2,"divorce":-1.5,"polygamy":-1.5,"ageconsent":0,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":-1.5,"deathpen":-1,"socredit":0,"housing":-3,"landow":-4,"eminent":1,"homeless":-2.5,"carbpol":-2.5,"nucpol":1.5,"animal":-2.5,"gmo":-0.5,"water":-3,"statemedia":0.5,"langpol":0,"artscult":-0.3,"hatespeech":0,"transit":-3.5,"roads":-2,"autodrive":-1,"space":-1.5,"crypto":3,"bankrupt":-1,"ubitype":-3,"wealthtax":0,"statebank":-3,"airegul":1.5,"cloning":-1.5,"stemcell":-2.5,"genedit":-2,"dataown":1,"taxloop":-4,"citizenpath":-2,"paramilitary":0,"moralpolice":0,"moralscope":1,"moralpenalty":0,"autoweap":3,"explos":2.5,"conceal":2,"onprost":-1,"lottery":-0.3,"cryptogamb":-0.5,"surrog":-1,"cyber":-0.5,"corrupt":-0.5},{"sov":0,"auto":24.3,"govg":3.2,"govc":-1.5,"syse":0,"sysl":0,"sysj":0,"rel":0,"for":0.5,"cons":-0.5,"righ":1,"minw":2.6,"minw2":2,"pensreg":0.7,"centow":0.8,"murd":0.5,"rape":0.5,"steal":0.3,"child":0.5,"defa":0.3,"incit":0.3,"stprost":-0.3,"broth":-0.3,"esco":-0.3,"hand":1,"shot":1,"rifle":1,"casin":-0.2,"oncasin":-0.2,"sports":-0.2,"homogen":-1.5,"homoad":2.5,"transgen":-1.5,"transad":0,"tobus":-0.1,"tobsel":-0.1,"alcus":-0.1,"alcsel":-0.1,"canus":-0.1,"cansel":-0.1,"psyus":-0.1,"psysel":-0.1,"stius":-0.1,"stisel":-0.1,"opius":-0.1,"opisel":-0.1,"euth":-1,"obsc":0.3,"warc":0.3,"corf":0.5,"blasph":1,"treas":0.5,"embe":0.5,"misce":0.5,"disse":1,"mifu":0.8,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0.6,"entreq":0.4,"envreg":-0.6,"womrig":0.5,"centfun":-0.7,"abort":0.5,"fabort":0,"surv":0,"datap":-0.5,"encry":1,"union":-2,"childlab":0,"ipprop":0.5,"trial":0.5,"prison":-0.5,"polover":0,"compulsed":-0.3,"religed":0.5,"homeschool":0,"sexed":0,"curriculum":0,"healthsys":-2.5,"mentalh":-0.3,"vacc":-0.3,"marriage":-0.5,"divorce":1.5,"polygamy":-0.5,"ageconsent":-0.5,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":1,"citizen":0.5,"deathpen":0,"socredit":-0.5,"housing":-1.5,"landow":-2,"eminent":0,"homeless":-1,"carbpol":-1.5,"nucpol":0.5,"animal":-1,"gmo":0,"water":-1.5,"statemedia":0,"langpol":0.5,"artscult":0,"hatespeech":-0.5,"transit":-1.5,"roads":-0.5,"autodrive":0,"space":0,"crypto":1,"bankrupt":0,"ubitype":-1.5,"wealthtax":-0.5,"statebank":-2,"airegul":0.5,"cloning":0,"stemcell":-0.5,"genedit":-1,"dataown":0,"taxloop":-2.5,"citizenpath":-0.5,"paramilitary":1,"moralpolice":2,"moralscope":3,"moralpenalty":1,"autoweap":1.5,"explos":0.5,"conceal":0.5,"onprost":-0.3,"lottery":-1.5,"cryptogamb":-0.2,"surrog":-0.3,"cyber":0.5,"corrupt":0.5},{"sov":0,"auto":24.3,"govg":null,"govc":0,"syse":0,"sysl":0,"sysj":0,"rel":3,"for":0,"cons":null,"righ":1.2,"minw":3.6,"minw2":null,"pensreg":2.2,"centow":2.2,"murd":2,"rape":2,"steal":1.5,"child":2,"defa":1,"incit":1.5,"stprost":0.5,"broth":0.5,"esco":0.5,"hand":0.5,"shot":0.5,"rifle":0.5,"casin":0.3,"oncasin":0.3,"sports":0.3,"homogen":0,"homoad":null,"transgen":0,"transad":3,"tobus":0,"tobsel":0.2,"alcus":0,"alcsel":0.2,"canus":0,"cansel":0.2,"psyus":0,"psysel":0.3,"stius":0,"stisel":0.3,"opius":0,"opisel":0.3,"euth":-0.3,"obsc":1,"warc":1.5,"corf":2,"blasph":2.5,"treas":1.5,"embe":1,"misce":1.5,"disse":2.5,"mifu":1.5,"imman":-5,"immst":0.45,"immwo":0.8,"immas":0.9,"immref":1,"inher":-4,"reserv":-1,"pover":-4,"unemp":-4,"pens":-3,"mininc":-5,"basinc":-8,"wast":-0.5,"pubpa":-0.3,"conser":-2,"solar":-2,"nucl":-0.5,"rnd":-1.5,"votr":1,"entreq":1.1,"envreg":-0.6,"womrig":0,"centfun":-1.1,"abort":0,"fabort":1.2,"surv":-1.5,"datap":0.5,"encry":3,"union":0,"childlab":-1,"ipprop":-0.5,"trial":3,"prison":2,"polover":2.5,"compulsed":-0.5,"religed":-0.5,"homeschool":-0.5,"sexed":1.5,"curriculum":0.5,"healthsys":-1,"mentalh":0.5,"vacc":0,"marriage":1,"divorce":0,"polygamy":1,"ageconsent":0,"pressf":2,"assembly":2,"censor":1.5,"slavery":3,"citizen":3,"deathpen":1.5,"socredit":-2,"housing":-0.5,"landow":0,"eminent":-1.5,"homeless":0,"carbpol":-0.3,"nucpol":-1,"animal":0,"gmo":0,"water":0,"statemedia":-1.5,"langpol":2,"artscult":1,"hatespeech":-1.5,"transit":0,"roads":1,"autodrive":0.5,"space":1,"crypto":-1,"bankrupt":0.5,"ubitype":-1,"wealthtax":-1.5,"statebank":0,"airegul":0,"cloning":2.5,"stemcell":0.5,"genedit":0,"dataown":-0.5,"taxloop":-1,"citizenpath":0.5,"paramilitary":2,"moralpolice":5,"moralscope":7,"moralpenalty":2,"autoweap":0.5,"explos":-0.3,"conceal":0,"onprost":0.5,"lottery":0,"cryptogamb":0.5,"surrog":0.5,"cyber":1.5,"corrupt":1.5},{"sov":-5,"auto":24.3,"govg":null,"govc":1,"syse":1.5,"sysl":0,"sysj":0,"rel":null,"for":2,"cons":null,"righ":1.8,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":4,"rape":4,"steal":3,"child":4,"defa":2,"incit":3,"stprost":1.5,"broth":1.5,"esco":1.5,"hand":0,"shot":0,"rifle":0,"casin":1,"oncasin":1,"sports":1,"homogen":1.5,"homoad":null,"transgen":1.5,"transad":null,"tobus":0.2,"tobsel":0.5,"alcus":0.2,"alcsel":0.5,"canus":0.2,"cansel":0.5,"psyus":0.3,"psysel":0.8,"stius":0.3,"stisel":0.8,"opius":0.3,"opisel":0.8,"euth":0.5,"obsc":2,"warc":3,"corf":3,"blasph":4,"treas":3,"embe":2,"misce":3,"disse":5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":1.5,"entreq":1.1,"envreg":-0.6,"womrig":-0.8,"centfun":null,"abort":-0.5,"fabort":null,"surv":null,"datap":2,"encry":null,"union":2,"childlab":null,"ipprop":-1.5,"trial":-1,"prison":5,"polover":0,"compulsed":-1,"religed":-2,"homeschool":-1.5,"sexed":1,"curriculum":1.5,"healthsys":0.5,"mentalh":1.5,"vacc":0.3,"marriage":3,"divorce":4,"polygamy":2.5,"ageconsent":0.5,"pressf":5,"assembly":5,"censor":4,"slavery":7,"citizen":5,"deathpen":4,"socredit":-5,"housing":0,"landow":2,"eminent":-3,"homeless":2,"carbpol":0.5,"nucpol":-2.5,"animal":1.5,"gmo":1,"water":2.5,"statemedia":-4,"langpol":4,"artscult":2.5,"hatespeech":-3,"transit":1.5,"roads":3,"autodrive":1.5,"space":0.5,"crypto":-3,"bankrupt":2,"ubitype":0.5,"wealthtax":-3,"statebank":5,"airegul":-1,"cloning":null,"stemcell":3,"genedit":1,"dataown":-3,"taxloop":0,"citizenpath":1.5,"paramilitary":5,"moralpolice":10,"moralscope":12,"moralpenalty":6,"autoweap":0,"explos":-1.5,"conceal":-0.5,"onprost":1.5,"lottery":1,"cryptogamb":1.5,"surrog":1.5,"cyber":3,"corrupt":3},{"sov":null,"auto":24.3,"govg":null,"govc":2,"syse":1,"sysl":0,"sysj":0,"rel":null,"for":3.5,"cons":null,"righ":2,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":7,"rape":7,"steal":5,"child":7,"defa":4,"incit":6,"stprost":3,"broth":3,"esco":3,"hand":-0.5,"shot":-0.5,"rifle":-0.5,"casin":2.5,"oncasin":2.5,"sports":2.5,"homogen":3,"homoad":null,"transgen":3,"transad":null,"tobus":0.5,"tobsel":1.5,"alcus":0.5,"alcsel":1.5,"canus":0.5,"cansel":1.5,"psyus":0.8,"psysel":2,"stius":0.8,"stisel":2,"opius":0.8,"opisel":2,"euth":2,"obsc":4,"warc":5,"corf":5,"blasph":7,"treas":5,"embe":4,"misce":5,"disse":8,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":-1.2,"womrig":-1.5,"centfun":null,"abort":-1,"fabort":null,"surv":null,"datap":null,"encry":null,"union":4,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":3,"mentalh":null,"vacc":1.5,"marriage":5,"divorce":0,"polygamy":0,"ageconsent":3,"pressf":0,"assembly":0,"censor":8,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":2,"landow":1,"eminent":null,"homeless":null,"carbpol":2.5,"nucpol":null,"animal":null,"gmo":2.5,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":3,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-5,"statebank":null,"airegul":-2.5,"cloning":null,"stemcell":null,"genedit":3.5,"dataown":null,"taxloop":1.5,"citizenpath":3,"paramilitary":10,"moralpolice":14,"moralscope":null,"moralpenalty":10,"autoweap":-1,"explos":-3,"conceal":-2,"onprost":3,"lottery":2.5,"cryptogamb":3,"surrog":3,"cyber":5.5,"corrupt":5.5},{"sov":-3,"auto":null,"govg":null,"govc":0.5,"syse":0,"sysl":2,"sysj":0,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":6,"broth":6,"esco":6,"hand":-1.5,"shot":-1.5,"rifle":-1.5,"casin":5,"oncasin":5,"sports":5,"homogen":5,"homoad":null,"transgen":5,"transad":null,"tobus":1.5,"tobsel":3,"alcus":1.5,"alcsel":3,"canus":1.5,"cansel":3,"psyus":2,"psysel":4,"stius":2,"stisel":4,"opius":2,"opisel":4,"euth":1.5,"obsc":1.9,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":-0.5,"centfun":null,"abort":-1.5,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":5,"mentalh":null,"vacc":null,"marriage":1,"divorce":0,"polygamy":0,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-7,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":4,"citizenpath":4,"paramilitary":15,"moralpolice":null,"moralscope":null,"moralpenalty":18,"autoweap":-2.5,"explos":-5.5,"conceal":-4,"onprost":6},{"sov":8,"auto":null,"govg":null,"govc":1.5,"syse":2.5,"sysl":0,"sysj":0.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":-3,"shot":-3,"rifle":-3,"casin":null,"oncasin":null,"sports":null,"homogen":8,"homoad":null,"transgen":8,"transad":null,"tobus":3,"tobsel":5.5,"alcus":3,"alcsel":5.5,"canus":3,"cansel":5.5,"psyus":4,"psysel":6,"stius":4,"stisel":6,"opius":4,"opisel":6,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":-2,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-9,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":7,"paramilitary":22,"moralpolice":null,"moralscope":null,"moralpenalty":null,"autoweap":-4.5},{"sov":0,"auto":null,"govg":null,"govc":0,"syse":null,"sysl":null,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":-5,"shot":-5,"rifle":-5,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":5.5,"tobsel":null,"alcus":5.5,"alcsel":null,"canus":5.5,"cansel":null,"psyus":6,"psysel":null,"stius":6,"stisel":null,"opius":6,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-12,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":10,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null,"autoweap":-7},{"sov":3,"auto":null,"govg":null,"govc":2.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-12,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":14,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null},{"sov":0,"auto":null,"govg":null,"govc":-1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-12,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null},{"sov":null,"auto":null,"govg":null,"govc":0,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":-12,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null,"paramilitary":null,"moralpolice":null,"moralscope":null,"moralpenalty":null}];
  var spectrumWeights3=[{"sov":10.5,"auto":6,"govg":0,"govc":0,"syse":0,"sysl":0,"sysj":0,"rel":1.8,"for":0,"cons":1.5,"righ":0,"minw":0,"minw2":0,"pensreg":0,"centow":0,"murd":0,"rape":0,"steal":0,"child":0,"defa":0,"incit":0,"stprost":0,"broth":0,"esco":0,"hand":0,"shot":0,"rifle":0,"casin":0,"oncasin":0,"sports":0,"homogen":0,"homoad":0,"transgen":0,"transad":0,"tobus":0,"tobsel":0,"alcus":0,"alcsel":0,"canus":0,"cansel":0,"psyus":0,"psysel":0,"stius":0,"stisel":0,"opius":0,"opisel":0,"euth":0,"obsc":0,"warc":0,"corf":0,"blasph":0,"treas":0,"embe":0,"misce":0,"disse":0,"mifu":0,"imman":0.8,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0.8,"entreq":0.2,"envreg":0,"womrig":-0.9,"centfun":0,"abort":-3.2,"fabort":1.6,"surv":2,"datap":0,"encry":-0.3,"union":0.5,"childlab":0,"ipprop":0,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":0.3,"homeschool":0,"sexed":0,"curriculum":0.5,"healthsys":0,"mentalh":0,"vacc":1.5,"marriage":0,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":0,"landow":0.5,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0.3,"animal":0,"gmo":0,"water":0,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":0,"roads":0,"autodrive":0.3,"space":0,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":-0.3,"taxloop":0,"citizenpath":0},{"sov":7.4,"auto":3.5,"govg":3.3,"govc":2.5,"syse":2,"sysl":1,"sysj":1,"rel":0,"for":0,"cons":0,"righ":0,"minw":0,"minw2":0,"pensreg":0,"centow":0,"murd":0.1,"rape":0.1,"steal":0.4,"child":0.1,"defa":0.3,"incit":0.5,"stprost":0.1,"broth":0.1,"esco":0.1,"hand":0.1,"shot":0.1,"rifle":0.1,"casin":0.1,"oncasin":0.1,"sports":0.1,"homogen":0.3,"homoad":0.4,"transgen":0.3,"transad":0.25,"tobus":0.05,"tobsel":0.05,"alcus":0.05,"alcsel":0.05,"canus":0.05,"cansel":0.05,"psyus":0.05,"psysel":0.05,"stius":0.05,"stisel":0.05,"opius":0.05,"opisel":0.05,"euth":0.1,"obsc":0.3,"warc":0.1,"corf":0.3,"blasph":0.3,"treas":0.3,"embe":0.3,"misce":0.3,"disse":6.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":1.6,"entreq":0.2,"envreg":0,"womrig":-0.9,"centfun":0,"abort":-0.8,"fabort":1.6,"surv":0.5,"datap":0,"encry":1,"union":0,"childlab":0,"ipprop":0,"trial":0.3,"prison":0.3,"polover":0.5,"compulsed":0.2,"religed":0,"homeschool":0.2,"sexed":0,"curriculum":0.2,"healthsys":0,"mentalh":0,"vacc":0.5,"marriage":0,"divorce":0.3,"polygamy":0,"ageconsent":0,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":0.5,"citizen":0.2,"deathpen":0,"socredit":0.3,"housing":0,"landow":0,"eminent":0.2,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0.2,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0,"citizenpath":0.3},{"sov":6.3,"auto":2,"govg":null,"govc":3,"syse":2.5,"sysl":2,"sysj":1.9,"rel":1.8,"for":0.5,"cons":null,"righ":0,"minw":0,"minw2":null,"pensreg":0,"centow":0,"murd":0.2,"rape":0.2,"steal":0.6,"child":0.2,"defa":0.5,"incit":0.8,"stprost":0.2,"broth":0.2,"esco":0.2,"hand":0.2,"shot":0.2,"rifle":0.2,"casin":0.15,"oncasin":0.15,"sports":0.15,"homogen":0.45,"homoad":null,"transgen":0.45,"transad":0.4,"tobus":0.1,"tobsel":0.1,"alcus":0.1,"alcsel":0.1,"canus":0.1,"cansel":0.1,"psyus":0.1,"psysel":0.1,"stius":0.1,"stisel":0.1,"opius":0.1,"opisel":0.1,"euth":0.25,"obsc":0.5,"warc":0.2,"corf":0.5,"blasph":0.5,"treas":0.5,"embe":0.5,"misce":0.5,"disse":7,"mifu":2.5,"imman":-2.5,"immst":1,"immwo":1,"immas":1,"immref":1,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":2.2,"entreq":0.4,"envreg":0,"womrig":-0.9,"centfun":0,"abort":-0.6,"fabort":1.9,"surv":-0.3,"datap":0,"encry":1.5,"union":0,"childlab":0,"ipprop":0,"trial":2,"prison":0.8,"polover":1.5,"compulsed":0.3,"religed":0,"homeschool":0.5,"sexed":0.3,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0.3,"divorce":0.3,"polygamy":0.3,"ageconsent":0,"pressf":2,"assembly":1.5,"censor":2,"slavery":1.5,"citizen":0.5,"deathpen":0.5,"socredit":1.5,"housing":0,"landow":0,"eminent":0.8,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":1,"langpol":0.3,"artscult":0.1,"hatespeech":0.5,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0.5,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0.3,"stemcell":0,"genedit":0,"dataown":0.3,"taxloop":0,"citizenpath":0.3},{"sov":4.6,"auto":1,"govg":null,"govc":4.9,"syse":3.5,"sysl":4,"sysj":2.8,"rel":null,"for":1,"cons":null,"righ":1,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":0.35,"rape":0.35,"steal":0.9,"child":0.35,"defa":0.8,"incit":1.1,"stprost":0.35,"broth":0.35,"esco":0.35,"hand":0.4,"shot":0.4,"rifle":0.4,"casin":0.35,"oncasin":0.35,"sports":0.35,"homogen":1,"homoad":null,"transgen":1,"transad":null,"tobus":0.15,"tobsel":0.15,"alcus":0.15,"alcsel":0.15,"canus":0.15,"cansel":0.15,"psyus":0.15,"psysel":0.15,"stius":0.15,"stisel":0.15,"opius":0.15,"opisel":0.15,"euth":0.4,"obsc":0.8,"warc":0.35,"corf":0.8,"blasph":0.8,"treas":0.7,"embe":0.8,"misce":0.8,"disse":8.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":1.8,"entreq":0.4,"envreg":0,"womrig":-2.1,"centfun":null,"abort":-0.4,"fabort":null,"surv":null,"datap":0.3,"encry":null,"union":0.5,"childlab":null,"ipprop":0,"trial":-0.3,"prison":1.5,"polover":null,"compulsed":0.5,"religed":0.5,"homeschool":1,"sexed":0.5,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":1.5,"divorce":1,"polygamy":0.8,"ageconsent":0.2,"pressf":3,"assembly":3,"censor":3,"slavery":3,"citizen":0.8,"deathpen":1.5,"socredit":3,"housing":0,"landow":0,"eminent":1.5,"homeless":1,"carbpol":0,"nucpol":0,"animal":0,"gmo":0.2,"water":0,"statemedia":2.5,"langpol":1.2,"artscult":0.2,"hatespeech":1,"transit":0,"roads":0,"autodrive":0.3,"space":0,"crypto":1,"bankrupt":0.5,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0.3,"cloning":null,"stemcell":0.3,"genedit":0,"dataown":1.5,"taxloop":0,"citizenpath":0},{"sov":null,"auto":0,"govg":null,"govc":2.8,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":2.4,"cons":null,"righ":2.9,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":0.5,"rape":0.5,"steal":1.2,"child":0.6,"defa":1.1,"incit":1.5,"stprost":0.5,"broth":0.5,"esco":0.5,"hand":0.6,"shot":0.6,"rifle":0.6,"casin":0.45,"oncasin":0.45,"sports":0.45,"homogen":1.2,"homoad":null,"transgen":1.2,"transad":null,"tobus":0.25,"tobsel":0.25,"alcus":0.25,"alcsel":0.25,"canus":0.25,"cansel":0.25,"psyus":0.25,"psysel":0.25,"stius":0.25,"stisel":0.25,"opius":0.25,"opisel":0.25,"euth":0.6,"obsc":1.2,"warc":0.6,"corf":1,"blasph":1.2,"treas":1,"embe":1,"misce":1.2,"disse":10,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":0,"womrig":0,"centfun":null,"abort":-0.4,"fabort":null,"surv":null,"datap":null,"encry":null,"union":1,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":0.3,"marriage":1.5,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":3.5,"slavery":null,"citizen":0.3,"deathpen":null,"socredit":null,"housing":0,"landow":0.5,"eminent":null,"homeless":null,"carbpol":0,"nucpol":null,"animal":null,"gmo":0.3,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":0.5,"cloning":null,"stemcell":null,"genedit":0.3,"dataown":null,"taxloop":-0.2,"citizenpath":1},{"sov":8.8,"auto":null,"govg":null,"govc":3,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":0.9,"shot":0.9,"rifle":0.9,"casin":0.6,"oncasin":0.6,"sports":0.6,"homogen":1.4,"homoad":null,"transgen":1.4,"transad":null,"tobus":0.35,"tobsel":0.35,"alcus":0.35,"alcsel":0.35,"canus":0.35,"cansel":0.35,"psyus":0.35,"psysel":0.35,"stius":0.35,"stisel":0.35,"opius":0.35,"opisel":0.35,"euth":1,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":0,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":null,"marriage":-0.5,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-0.5,"citizenpath":1.5},{"sov":5.9,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":1.2,"shot":1.2,"rifle":1.2,"casin":null,"oncasin":null,"sports":null,"homogen":1.7,"homoad":null,"transgen":1.7,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-1},{"sov":5,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":1.7,"shot":1.7,"rifle":1.7,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-1.5},{"sov":3.2,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-2},{"sov":4.2,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights4=[{"sov":null,"auto":null,"govg":29.7,"govc":0,"syse":0,"sysl":null,"sysj":null,"rel":-8,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0,"broth":0,"esco":0,"hand":null,"shot":null,"rifle":null,"casin":0,"oncasin":0,"sports":0,"homogen":0,"homoad":0,"transgen":0,"transad":0,"tobus":0,"tobsel":0,"alcus":0,"alcsel":0,"canus":0,"cansel":0,"psyus":0,"psysel":0,"stius":0,"stisel":0,"opius":0,"opisel":0,"euth":0,"obsc":0,"warc":null,"corf":null,"blasph":0,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0,"envreg":null,"womrig":-2,"centfun":null,"abort":-6.7,"fabort":-1,"surv":0,"datap":0,"encry":0,"union":0,"childlab":0.5,"ipprop":0,"trial":0,"prison":-0.5,"polover":0,"compulsed":0,"religed":2,"homeschool":0,"sexed":-0.5,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":-0.5,"divorce":-0.3,"polygamy":-0.5,"ageconsent":-1,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":-0.5,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":-0.5,"nucpol":0,"animal":-1,"gmo":-0.3,"water":0,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":0,"roads":0,"autodrive":-0.5,"space":0,"crypto":0,"bankrupt":0,"ubitype":-0.3,"wealthtax":0,"statebank":0,"airegul":0,"cloning":-0.5,"stemcell":-0.5,"genedit":-0.5,"dataown":0,"taxloop":0,"citizenpath":0},{"sov":null,"auto":null,"govg":29.7,"govc":0,"syse":0,"sysl":null,"sysj":null,"rel":0,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.5,"broth":0.5,"esco":0.5,"hand":null,"shot":null,"rifle":null,"casin":0.3,"oncasin":0.3,"sports":0.3,"homogen":1,"homoad":3,"transgen":0.8,"transad":1.7,"tobus":0.15,"tobsel":0.15,"alcus":0.15,"alcsel":0.15,"canus":0.15,"cansel":0.15,"psyus":0.15,"psysel":0.15,"stius":0.15,"stisel":0.15,"opius":0.15,"opisel":0.15,"euth":0.8,"obsc":2.2,"warc":null,"corf":null,"blasph":3.5,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0,"envreg":null,"womrig":-2,"centfun":null,"abort":-0.9,"fabort":-1,"surv":0,"datap":0,"encry":0,"union":0,"childlab":0,"ipprop":0,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":0.5,"homeschool":0,"sexed":0,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0,"divorce":0.5,"polygamy":0,"ageconsent":-0.3,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":-0.3,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":-0.3,"nucpol":0,"animal":-0.3,"gmo":0,"water":0,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":-0.2,"dataown":0,"taxloop":0,"citizenpath":0.3},{"sov":null,"auto":null,"govg":null,"govc":-2,"syse":0,"sysl":null,"sysj":null,"rel":7.6,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":2,"broth":2,"esco":2,"hand":null,"shot":null,"rifle":null,"casin":1.8,"oncasin":1.8,"sports":1.8,"homogen":2.5,"homoad":null,"transgen":2.5,"transad":3,"tobus":0.4,"tobsel":0.4,"alcus":0.4,"alcsel":0.4,"canus":0.4,"cansel":0.4,"psyus":0.4,"psysel":0.4,"stius":0.4,"stisel":0.4,"opius":0.4,"opisel":0.4,"euth":1.2,"obsc":3.5,"warc":null,"corf":null,"blasph":4.4,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":-0.5,"nucl":-0.5,"rnd":-2,"votr":null,"entreq":0,"envreg":null,"womrig":-2,"centfun":null,"abort":-1.2,"fabort":-1,"surv":0,"datap":0,"encry":0,"union":0,"childlab":-0.3,"ipprop":0,"trial":0.5,"prison":0.5,"polover":0,"compulsed":0,"religed":-0.5,"homeschool":0,"sexed":1.5,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0.5,"divorce":0.3,"polygamy":0.5,"ageconsent":0,"pressf":0,"assembly":0,"censor":0.5,"slavery":0.5,"citizen":0.3,"deathpen":0.5,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0,"langpol":0.5,"artscult":0.1,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":1,"stemcell":0.5,"genedit":0,"dataown":0,"taxloop":0,"citizenpath":0.5},{"sov":null,"auto":null,"govg":null,"govc":0,"syse":3,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":2.6,"broth":2.6,"esco":2.6,"hand":null,"shot":null,"rifle":null,"casin":2.2,"oncasin":2.2,"sports":2.2,"homogen":3,"homoad":null,"transgen":3,"transad":null,"tobus":0.6,"tobsel":0.6,"alcus":0.6,"alcsel":0.6,"canus":0.6,"cansel":0.6,"psyus":0.6,"psysel":0.6,"stius":0.6,"stisel":0.6,"opius":0.6,"opisel":0.6,"euth":1.8,"obsc":3.5,"warc":null,"corf":null,"blasph":4.4,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":4.5,"envreg":null,"womrig":-1,"centfun":null,"abort":-1.2,"fabort":null,"surv":null,"datap":0,"encry":null,"union":0,"childlab":null,"ipprop":0,"trial":0,"prison":1,"polover":null,"compulsed":0,"religed":-1,"homeschool":0,"sexed":2,"curriculum":0,"healthsys":0,"mentalh":0.5,"vacc":0,"marriage":3,"divorce":3,"polygamy":1,"ageconsent":0.3,"pressf":0,"assembly":0,"censor":1,"slavery":2,"citizen":1,"deathpen":1,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0.5,"carbpol":0,"nucpol":0.3,"animal":0.3,"gmo":0.3,"water":0,"statemedia":0,"langpol":1,"artscult":0.2,"hatespeech":0,"transit":0,"roads":0,"autodrive":0.5,"space":0,"crypto":0,"bankrupt":0.5,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0.5,"cloning":null,"stemcell":1,"genedit":0.3,"dataown":0,"taxloop":0,"citizenpath":0},{"sov":null,"auto":null,"govg":null,"govc":0,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":2.6,"broth":2.6,"esco":2.6,"hand":null,"shot":null,"rifle":null,"casin":2.2,"oncasin":2.2,"sports":2.2,"homogen":4,"homoad":null,"transgen":4,"transad":null,"tobus":0.6,"tobsel":0.6,"alcus":0.6,"alcsel":0.6,"canus":0.6,"cansel":0.6,"psyus":0.6,"psysel":0.6,"stius":0.6,"stisel":0.6,"opius":0.6,"opisel":0.6,"euth":3.7,"obsc":3.5,"warc":null,"corf":null,"blasph":4.4,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":-1.4,"fabort":null,"surv":null,"datap":null,"encry":null,"union":0,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":1.5,"marriage":2.5,"divorce":null,"polygamy":null,"ageconsent":3,"pressf":null,"assembly":null,"censor":1,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":0,"landow":0.5,"eminent":null,"homeless":null,"carbpol":0.5,"nucpol":null,"animal":null,"gmo":0.5,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":1.5,"cloning":null,"stemcell":null,"genedit":1,"dataown":null,"taxloop":0,"citizenpath":1},{"sov":null,"auto":null,"govg":null,"govc":8,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":2.6,"broth":2.6,"esco":2.6,"hand":null,"shot":null,"rifle":null,"casin":2.2,"oncasin":2.2,"sports":2.2,"homogen":4,"homoad":null,"transgen":4,"transad":null,"tobus":0.6,"tobsel":0.6,"alcus":0.6,"alcsel":0.6,"canus":0.6,"cansel":0.6,"psyus":0.6,"psysel":0.6,"stius":0.6,"stisel":0.6,"opius":0.6,"opisel":0.6,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":null,"marriage":-1,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0,"citizenpath":0.5},{"sov":null,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":4,"homoad":null,"transgen":4,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":null,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":null,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":null,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights5=[{"sov":0,"auto":2,"govg":30.7,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":0,"cons":1.8,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":0,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":0,"embe":null,"misce":0,"disse":null,"mifu":null,"imman":4,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0,"entreq":1.5,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":0,"surv":0,"datap":0,"encry":0,"union":0,"childlab":0,"ipprop":0,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":1,"homeschool":0,"sexed":0,"curriculum":0.3,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":-0.5,"deathpen":0,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0.5,"animal":0,"gmo":0,"water":0,"statemedia":0,"langpol":-0.5,"artscult":-0.2,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":-0.3,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0,"citizenpath":-0.5},{"sov":11,"auto":4.6,"govg":30.7,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":3.4,"cons":0,"righ":2.5,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":-3.5,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":0.8,"embe":null,"misce":6,"disse":null,"mifu":null,"imman":-12.5,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0,"entreq":1,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":0,"surv":0,"datap":0,"encry":0,"union":0,"childlab":0,"ipprop":0,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":0,"homeschool":0,"sexed":0,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0,"citizenpath":0.5},{"sov":11,"auto":3.5,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":3,"cons":null,"righ":4.5,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":-5.7,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":1.8,"embe":null,"misce":8,"disse":null,"mifu":null,"imman":-25,"immst":0.45,"immwo":0.7,"immas":0.9,"immref":1,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":0,"entreq":5.5,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":6.9,"surv":0,"datap":0,"encry":0.5,"union":0,"childlab":0,"ipprop":0,"trial":0.5,"prison":0,"polover":0,"compulsed":0,"religed":0,"homeschool":0,"sexed":0,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":0,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":0.5,"assembly":0,"censor":1,"slavery":0,"citizen":0.5,"deathpen":0,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0.5,"langpol":0.5,"artscult":0.1,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0.3,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0,"citizenpath":0},{"sov":7,"auto":2,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":2,"cons":null,"righ":8,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":-5.7,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":2,"embe":null,"misce":8,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":6.2,"entreq":1.9,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":0,"encry":null,"union":0,"childlab":null,"ipprop":0,"trial":0,"prison":0,"polover":null,"compulsed":0,"religed":0,"homeschool":0,"sexed":0,"curriculum":0,"healthsys":0,"mentalh":0,"vacc":0,"marriage":1,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":1,"assembly":0,"censor":1.5,"slavery":0,"citizen":1,"deathpen":0,"socredit":0,"housing":0,"landow":0,"eminent":0,"homeless":0,"carbpol":0,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":1,"langpol":2,"artscult":0.2,"hatespeech":0,"transit":0,"roads":0,"autodrive":0,"space":0,"crypto":0.5,"bankrupt":0,"ubitype":0,"wealthtax":0,"statebank":0,"airegul":0,"cloning":null,"stemcell":0,"genedit":0,"dataown":0.5,"taxloop":0,"citizenpath":0},{"sov":null,"auto":0,"govg":null,"govc":null,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":3.4,"cons":null,"righ":10.8,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":-5.7,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":2.6,"embe":null,"misce":8,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":0,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":0,"marriage":0.5,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":2,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":0,"landow":1.5,"eminent":null,"homeless":null,"carbpol":0,"nucpol":null,"animal":null,"gmo":0,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":0,"cloning":null,"stemcell":null,"genedit":0,"dataown":null,"taxloop":0,"citizenpath":2},{"sov":13,"auto":null,"govg":null,"govc":null,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0,"mentalh":null,"vacc":null,"marriage":0,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0,"citizenpath":1},{"sov":9,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":3,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":8,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":5,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":0},{"sov":6.5,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights6=[{"sov":null,"auto":null,"govg":12,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":2.2,"minw":14,"minw2":7,"pensreg":17,"centow":12,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0,"broth":0,"esco":0,"hand":0,"shot":0,"rifle":0,"casin":0,"oncasin":0,"sports":0,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0,"tobsel":0,"alcus":0,"alcsel":0,"canus":0,"cansel":0,"psyus":0,"psysel":0,"stius":0,"stisel":0,"opius":0,"opisel":0,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":2,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":1.1,"womrig":0,"centfun":1.5,"abort":null,"fabort":null,"surv":1,"datap":-0.5,"encry":0,"union":1.5,"childlab":-1,"ipprop":1,"trial":0,"prison":0.3,"polover":0.5,"compulsed":0,"religed":0.5,"homeschool":0,"sexed":0.3,"curriculum":0.8,"healthsys":2,"mentalh":0.5,"vacc":2,"marriage":0,"divorce":0,"polygamy":0,"ageconsent":0,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":1.5,"landow":1.5,"eminent":0,"homeless":0.5,"carbpol":2,"nucpol":0,"animal":1,"gmo":-0.3,"water":1.5,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":1,"roads":0.5,"autodrive":1,"space":0.5,"crypto":-0.5,"bankrupt":-0.5,"ubitype":1,"wealthtax":0,"statebank":1,"airegul":-0.5,"cloning":0,"stemcell":0.3,"genedit":-0.3,"dataown":0.3,"taxloop":0.5,"citizenpath":0},{"sov":null,"auto":null,"govg":12,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0,"minw":9,"minw2":0,"pensreg":7,"centow":8,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.2,"broth":0.2,"esco":0.2,"hand":0.2,"shot":0.2,"rifle":0.2,"casin":0.2,"oncasin":0.2,"sports":0.2,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0.1,"tobsel":0.1,"alcus":0.1,"alcsel":0.1,"canus":0.1,"cansel":0.1,"psyus":0.1,"psysel":0.1,"stius":0.1,"stisel":0.1,"opius":0.1,"opisel":0.1,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":1.1,"womrig":-7,"centfun":2,"abort":null,"fabort":null,"surv":0.5,"datap":0,"encry":0.5,"union":0.8,"childlab":0,"ipprop":0.3,"trial":0.3,"prison":0,"polover":0,"compulsed":0.3,"religed":0,"homeschool":0.2,"sexed":0,"curriculum":0.4,"healthsys":1.5,"mentalh":0.2,"vacc":1,"marriage":0,"divorce":0.3,"polygamy":0,"ageconsent":0,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":0,"citizen":0,"deathpen":0,"socredit":0.5,"housing":0.8,"landow":0.5,"eminent":0.3,"homeless":0.3,"carbpol":1.5,"nucpol":0,"animal":0.5,"gmo":0,"water":0.8,"statemedia":0.3,"langpol":0,"artscult":0,"hatespeech":0.3,"transit":0.5,"roads":0,"autodrive":0,"space":0,"crypto":0.5,"bankrupt":0,"ubitype":0.5,"wealthtax":0.1,"statebank":0.5,"airegul":0.3,"cloning":0.3,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0.3,"citizenpath":0},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0,"minw":0,"minw2":null,"pensreg":0,"centow":0,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.4,"broth":0.4,"esco":0.4,"hand":0.4,"shot":0.4,"rifle":0.4,"casin":0.4,"oncasin":0.4,"sports":0.4,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0.25,"tobsel":0.25,"alcus":0.25,"alcsel":0.25,"canus":0.25,"cansel":0.25,"psyus":0.25,"psysel":0.25,"stius":0.25,"stisel":0.25,"opius":0.25,"opisel":0.25,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":-5,"immst":0,"immwo":1,"immas":0,"immref":0,"inher":null,"reserv":3.5,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":0.8,"nucl":0.8,"rnd":null,"votr":null,"entreq":null,"envreg":1.1,"womrig":0,"centfun":3,"abort":null,"fabort":null,"surv":0,"datap":1,"encry":1,"union":0,"childlab":0.5,"ipprop":-0.3,"trial":0.5,"prison":-0.3,"polover":-0.5,"compulsed":0.5,"religed":0,"homeschool":0.5,"sexed":-0.3,"curriculum":0,"healthsys":1,"mentalh":-0.3,"vacc":0,"marriage":0.3,"divorce":0,"polygamy":0.3,"ageconsent":0,"pressf":1.5,"assembly":1,"censor":1.5,"slavery":-0.5,"citizen":0,"deathpen":0.3,"socredit":1.5,"housing":0.5,"landow":0.3,"eminent":0.5,"homeless":0,"carbpol":0.3,"nucpol":0.3,"animal":0,"gmo":0.3,"water":0,"statemedia":0.5,"langpol":0.3,"artscult":0.1,"hatespeech":0.5,"transit":0,"roads":-0.5,"autodrive":0.3,"space":-0.3,"crypto":1,"bankrupt":0.3,"ubitype":0.3,"wealthtax":0.2,"statebank":0,"airegul":0.8,"cloning":0.5,"stemcell":0.3,"genedit":0.3,"dataown":-0.3,"taxloop":0.1,"citizenpath":0.5},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.4,"broth":0.4,"esco":0.4,"hand":0.4,"shot":0.4,"rifle":0.4,"casin":0.4,"oncasin":0.4,"sports":0.4,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0.25,"tobsel":0.25,"alcus":0.25,"alcsel":0.25,"canus":0.25,"cansel":0.25,"psyus":0.25,"psysel":0.25,"stius":0.25,"stisel":0.25,"opius":0.25,"opisel":0.25,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":1,"womrig":0,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":2,"encry":null,"union":-0.8,"childlab":null,"ipprop":-1,"trial":-0.3,"prison":-0.5,"polover":null,"compulsed":0.8,"religed":0.3,"homeschool":1,"sexed":-0.5,"curriculum":-0.3,"healthsys":0.5,"mentalh":-0.5,"vacc":0,"marriage":1,"divorce":1,"polygamy":0.5,"ageconsent":0.2,"pressf":2,"assembly":1,"censor":2.5,"slavery":-1,"citizen":0,"deathpen":0.5,"socredit":2,"housing":0,"landow":-0.5,"eminent":0.5,"homeless":0.3,"carbpol":0,"nucpol":0.5,"animal":-0.5,"gmo":0.8,"water":-1,"statemedia":1,"langpol":1,"artscult":0.2,"hatespeech":1,"transit":-0.5,"roads":-1,"autodrive":0.5,"space":0,"crypto":1.5,"bankrupt":1,"ubitype":0,"wealthtax":0.3,"statebank":-0.3,"airegul":1.5,"cloning":null,"stemcell":0.5,"genedit":0.5,"dataown":1,"taxloop":0,"citizenpath":0},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":null,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.4,"broth":0.4,"esco":0.4,"hand":0.4,"shot":0.4,"rifle":0.4,"casin":0.4,"oncasin":0.4,"sports":0.4,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0.25,"tobsel":0.25,"alcus":0.25,"alcsel":0.25,"canus":0.25,"cansel":0.25,"psyus":0.25,"psysel":0.25,"stius":0.25,"stisel":0.25,"opius":0.25,"opisel":0.25,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":3.7,"womrig":1.5,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":-1.5,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":-1.5,"mentalh":null,"vacc":0.5,"marriage":1,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":3,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":-1,"landow":0.5,"eminent":null,"homeless":null,"carbpol":-1,"nucpol":null,"animal":null,"gmo":1,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":-1,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.4,"statebank":null,"airegul":2,"cloning":null,"stemcell":null,"genedit":1,"dataown":null,"taxloop":-0.3,"citizenpath":0},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":0.4,"broth":0.4,"esco":0.4,"hand":0.4,"shot":0.4,"rifle":0.4,"casin":0.4,"oncasin":0.4,"sports":0.4,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":0.25,"tobsel":0.25,"alcus":0.25,"alcsel":0.25,"canus":0.25,"cansel":0.25,"psyus":0.25,"psysel":0.25,"stius":0.25,"stisel":0.25,"opius":0.25,"opisel":0.25,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":3,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":-2,"mentalh":null,"vacc":null,"marriage":-1,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.5,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-0.8,"citizenpath":0},{"sov":null,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.6,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-1.5},{"sov":null,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.7,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-2.5},{"sov":null,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.8,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":-3},{"sov":null,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":0.9,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":1,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights7=[{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":0,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":0,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":1,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":0,"datap":0,"encry":0,"union":-0.3,"childlab":1,"ipprop":0.3,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":1.2,"homeschool":0,"sexed":0,"curriculum":0.8,"healthsys":-1.5,"mentalh":-0.4,"vacc":1,"marriage":0,"divorce":0,"polygamy":-0.3,"ageconsent":-0.5,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":0.8,"landow":1.5,"eminent":0,"homeless":-0.3,"carbpol":-0.2,"nucpol":0.3,"animal":-0.3,"gmo":-0.1,"water":0.5,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":0.3,"roads":0.2,"autodrive":0.3,"space":0.2,"crypto":0.3,"bankrupt":0,"ubitype":-0.3,"wealthtax":-0.5,"statebank":0.3,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":-0.3,"taxloop":0},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":0,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":1,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":1,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":0.6,"datap":0.3,"encry":0.4,"union":0,"childlab":0,"ipprop":0,"trial":0.3,"prison":0.3,"polover":0.5,"compulsed":0.3,"religed":0.5,"homeschool":0.2,"sexed":0.2,"curriculum":0.4,"healthsys":-0.8,"mentalh":-0.1,"vacc":0.5,"marriage":0,"divorce":0.3,"polygamy":0,"ageconsent":-0.2,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":0.3,"citizen":0.2,"deathpen":0,"socredit":0.2,"housing":0.3,"landow":0.8,"eminent":0.2,"homeless":0,"carbpol":0,"nucpol":0,"animal":-0.1,"gmo":0,"water":0.2,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0.2,"transit":0.1,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0.1,"ubitype":-0.1,"wealthtax":-0.2,"statebank":0.2,"airegul":0.2,"cloning":0.1,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0.04000000000000001},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":0,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":1,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":1,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":1.2,"datap":0.6,"encry":0.8,"union":0.3,"childlab":-0.2,"ipprop":-0.2,"trial":1.5,"prison":0.8,"polover":1.2,"compulsed":0.5,"religed":0,"homeschool":0.5,"sexed":0.5,"curriculum":0,"healthsys":-0.3,"mentalh":0.2,"vacc":0,"marriage":0.3,"divorce":0.5,"polygamy":0.4,"ageconsent":0,"pressf":1.5,"assembly":1.2,"censor":1.5,"slavery":1,"citizen":0.5,"deathpen":0.3,"socredit":1,"housing":0.2,"landow":0.2,"eminent":0.8,"homeless":0.3,"carbpol":0.1,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0.5,"langpol":0.4,"artscult":0.1,"hatespeech":0.5,"transit":0,"roads":-0.2,"autodrive":0,"space":0,"crypto":0.3,"bankrupt":0.2,"ubitype":-0.1,"wealthtax":-0.1,"statebank":0,"airegul":0.5,"cloning":0.4,"stemcell":0.2,"genedit":0.1,"dataown":0.3,"taxloop":0.08000000000000002},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":0,"cons":null,"righ":1,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":1,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":1,"entreq":1,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":0.9,"encry":null,"union":0.8,"childlab":null,"ipprop":-0.5,"trial":-0.2,"prison":1.5,"polover":null,"compulsed":0.8,"religed":-0.5,"homeschool":1,"sexed":0.8,"curriculum":-0.2,"healthsys":0,"mentalh":0.5,"vacc":0,"marriage":1.2,"divorce":1.5,"polygamy":0.8,"ageconsent":0.2,"pressf":3,"assembly":2.5,"censor":2.5,"slavery":3,"citizen":0.8,"deathpen":0.8,"socredit":3,"housing":0,"landow":0,"eminent":1.5,"homeless":1,"carbpol":0.3,"nucpol":0.2,"animal":0.3,"gmo":0.2,"water":-0.3,"statemedia":2,"langpol":1.2,"artscult":0.2,"hatespeech":1,"transit":-0.1,"roads":-0.4,"autodrive":0.3,"space":0,"crypto":1,"bankrupt":0.5,"ubitype":0,"wealthtax":0,"statebank":-0.1,"airegul":1,"cloning":null,"stemcell":0.5,"genedit":0.2,"dataown":1.5,"taxloop":0.2},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":1,"cons":null,"righ":1,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":1,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":1.5,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0.8,"mentalh":null,"vacc":0.8,"marriage":1.5,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":3.5,"slavery":null,"citizen":0.6,"deathpen":null,"socredit":null,"housing":-0.3,"landow":0.5,"eminent":null,"homeless":null,"carbpol":0.5,"nucpol":null,"animal":null,"gmo":0.4,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":1.5,"cloning":null,"stemcell":null,"genedit":0.5,"dataown":null,"taxloop":0.4},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":1.2,"mentalh":null,"vacc":null,"marriage":-0.3,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":1},{"sov":null,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":1.6},{"sov":null,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.4,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":2.4000000000000004},{"sov":null,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":3.6},{"sov":null,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights8=[{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":0,"rape":0,"steal":0,"child":0,"defa":0,"incit":0,"stprost":0,"broth":0,"esco":0,"hand":0,"shot":0,"rifle":0,"casin":0,"oncasin":0,"sports":0,"homogen":0,"homoad":null,"transgen":0,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":0,"warc":0,"corf":0,"blasph":0,"treas":0,"embe":0,"misce":0,"disse":0,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":0,"fabort":null,"surv":0,"datap":0,"encry":0,"union":-0.3,"childlab":1,"ipprop":0.3,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":1.2,"homeschool":0,"sexed":0,"curriculum":0.8,"healthsys":-1.5,"mentalh":-0.4,"vacc":1,"marriage":0,"divorce":0,"polygamy":-0.3,"ageconsent":-0.5,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":0.8,"landow":1.5,"eminent":0,"homeless":-0.3,"carbpol":-0.2,"nucpol":0.3,"animal":-0.3,"gmo":-0.1,"water":0.5,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":0.3,"roads":0.2,"autodrive":0.3,"space":0.2,"crypto":0.3,"bankrupt":0,"ubitype":-0.3,"wealthtax":-0.5,"statebank":0.3,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":-0.3,"taxloop":0},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":1,"rape":1,"steal":1,"child":1,"defa":1,"incit":1,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":0.2,"homoad":null,"transgen":0.2,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":1,"warc":0.3,"corf":1,"blasph":1,"treas":0.5,"embe":1,"misce":1,"disse":1.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":0.6,"datap":0.3,"encry":0.4,"union":0,"childlab":0,"ipprop":0,"trial":0.3,"prison":0.3,"polover":0.5,"compulsed":0.3,"religed":0.5,"homeschool":0.2,"sexed":0.2,"curriculum":0.4,"healthsys":-0.8,"mentalh":-0.1,"vacc":0.5,"marriage":0,"divorce":0.3,"polygamy":0,"ageconsent":-0.2,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":0.3,"citizen":0.2,"deathpen":0,"socredit":0.2,"housing":0.3,"landow":0.8,"eminent":0.2,"homeless":0,"carbpol":0,"nucpol":0,"animal":-0.1,"gmo":0,"water":0.2,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0.2,"transit":0.1,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0.1,"ubitype":-0.1,"wealthtax":-0.2,"statebank":0.2,"airegul":0.2,"cloning":0.1,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0.04000000000000001},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":1,"broth":1,"esco":1,"hand":0.5,"shot":0.5,"rifle":0,"casin":1,"oncasin":1,"sports":1,"homogen":0,"homoad":null,"transgen":0,"transad":null,"tobus":1,"tobsel":1,"alcus":1,"alcsel":1,"canus":1,"cansel":1,"psyus":1,"psysel":1,"stius":1,"stisel":1,"opius":1,"opisel":1,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":1.2,"datap":0.6,"encry":0.8,"union":0.3,"childlab":-0.2,"ipprop":-0.2,"trial":1.5,"prison":0.8,"polover":1.2,"compulsed":0.5,"religed":0,"homeschool":0.5,"sexed":0.5,"curriculum":0,"healthsys":-0.3,"mentalh":0.2,"vacc":0,"marriage":0.3,"divorce":0.5,"polygamy":0.4,"ageconsent":0,"pressf":1.5,"assembly":1.2,"censor":1.5,"slavery":1,"citizen":0.5,"deathpen":0.3,"socredit":1,"housing":0.2,"landow":0.2,"eminent":0.8,"homeless":0.3,"carbpol":0.1,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0.5,"langpol":0.4,"artscult":0.1,"hatespeech":0.5,"transit":0,"roads":-0.2,"autodrive":0,"space":0,"crypto":0.3,"bankrupt":0.2,"ubitype":-0.1,"wealthtax":-0.1,"statebank":0,"airegul":0.5,"cloning":0.4,"stemcell":0.2,"genedit":0.1,"dataown":0.3,"taxloop":0.08000000000000002},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":0.2,"shot":0.2,"rifle":0.2,"casin":null,"oncasin":null,"sports":null,"homogen":1,"homoad":null,"transgen":1,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":0.9,"encry":null,"union":0.8,"childlab":null,"ipprop":-0.5,"trial":-0.2,"prison":1.5,"polover":null,"compulsed":0.8,"religed":-0.5,"homeschool":1,"sexed":0.8,"curriculum":-0.2,"healthsys":0,"mentalh":0.5,"vacc":0,"marriage":1.2,"divorce":1.5,"polygamy":0.8,"ageconsent":0.2,"pressf":3,"assembly":2.5,"censor":2.5,"slavery":3,"citizen":0.8,"deathpen":0.8,"socredit":3,"housing":0,"landow":0,"eminent":1.5,"homeless":1,"carbpol":0.3,"nucpol":0.2,"animal":0.3,"gmo":0.2,"water":-0.3,"statemedia":2,"langpol":1.2,"artscult":0.2,"hatespeech":1,"transit":-0.1,"roads":-0.4,"autodrive":0.3,"space":0,"crypto":1,"bankrupt":0.5,"ubitype":0,"wealthtax":0,"statebank":-0.1,"airegul":1,"cloning":null,"stemcell":0.5,"genedit":0.2,"dataown":1.5,"taxloop":0.2},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":1,"shot":1,"rifle":1,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":1.5,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0.8,"mentalh":null,"vacc":0.8,"marriage":1.5,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":3.5,"slavery":null,"citizen":0.6,"deathpen":null,"socredit":null,"housing":-0.3,"landow":0.5,"eminent":null,"homeless":null,"carbpol":0.5,"nucpol":null,"animal":null,"gmo":0.4,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":1.5,"cloning":null,"stemcell":null,"genedit":0.5,"dataown":null,"taxloop":0.4},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":1.2,"mentalh":null,"vacc":null,"marriage":-0.3,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":1},{"sov":null,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":1.6},{"sov":null,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.4,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":2.4000000000000004},{"sov":null,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":3.6},{"sov":null,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  var spectrumWeights9=[{"sov":50,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":2.2,"minw":null,"minw2":null,"pensreg":null,"centow":5,"murd":0,"rape":0,"steal":0,"child":0,"defa":0,"incit":0,"stprost":0,"broth":0,"esco":0,"hand":0,"shot":0,"rifle":0,"casin":0,"oncasin":0,"sports":0,"homogen":0,"homoad":0,"transgen":0,"transad":0,"tobus":0,"tobsel":0,"alcus":0,"alcsel":0,"canus":0,"cansel":0,"psyus":0,"psysel":0,"stius":0,"stisel":0,"opius":0,"opisel":0,"euth":null,"obsc":0,"warc":0,"corf":0,"blasph":0,"treas":0,"embe":0,"misce":0,"disse":0,"mifu":null,"imman":0,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0.1,"envreg":null,"womrig":null,"centfun":null,"abort":0,"fabort":0.5,"surv":0,"datap":0,"encry":0,"union":-0.3,"childlab":1,"ipprop":0.3,"trial":0,"prison":0,"polover":0,"compulsed":0,"religed":1.2,"homeschool":0,"sexed":0,"curriculum":0.8,"healthsys":-1.5,"mentalh":-0.4,"vacc":1,"marriage":0,"divorce":0,"polygamy":-0.3,"ageconsent":-0.5,"pressf":0,"assembly":0,"censor":0,"slavery":0,"citizen":0,"deathpen":0,"socredit":0,"housing":0.8,"landow":1.5,"eminent":0,"homeless":-0.3,"carbpol":-0.2,"nucpol":0.3,"animal":-0.3,"gmo":-0.1,"water":0.5,"statemedia":0,"langpol":0,"artscult":-0.2,"hatespeech":0,"transit":0.3,"roads":0.2,"autodrive":0.3,"space":0.2,"crypto":0.3,"bankrupt":0,"ubitype":-0.3,"wealthtax":-0.5,"statebank":0.3,"airegul":0,"cloning":0,"stemcell":0,"genedit":0,"dataown":-0.3,"taxloop":0},{"sov":35,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":0,"murd":0.5,"rape":0.5,"steal":0.5,"child":0.5,"defa":0.5,"incit":0.5,"stprost":0.2,"broth":0.2,"esco":0.2,"hand":0.2,"shot":0.2,"rifle":0.2,"casin":0.2,"oncasin":0.2,"sports":0.2,"homogen":0,"homoad":0,"transgen":0,"transad":0,"tobus":0,"tobsel":0.2,"alcus":0,"alcsel":0.2,"canus":0,"cansel":0.2,"psyus":0,"psysel":0.2,"stius":0,"stisel":0.2,"opius":0,"opisel":0.2,"euth":null,"obsc":0.5,"warc":0.5,"corf":0.5,"blasph":0.5,"treas":0.5,"embe":0.5,"misce":0.5,"disse":0.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0.2,"envreg":null,"womrig":null,"centfun":null,"abort":0.2,"fabort":0.5,"surv":0.6,"datap":0.3,"encry":0.4,"union":0,"childlab":0,"ipprop":0,"trial":0.3,"prison":0.3,"polover":0.5,"compulsed":0.3,"religed":0.5,"homeschool":0.2,"sexed":0.2,"curriculum":0.4,"healthsys":-0.8,"mentalh":-0.1,"vacc":0.5,"marriage":0,"divorce":0.3,"polygamy":0,"ageconsent":-0.2,"pressf":0.5,"assembly":0.5,"censor":0.3,"slavery":0.3,"citizen":0.2,"deathpen":0,"socredit":0.2,"housing":0.3,"landow":0.8,"eminent":0.2,"homeless":0,"carbpol":0,"nucpol":0,"animal":-0.1,"gmo":0,"water":0.2,"statemedia":0,"langpol":0,"artscult":0,"hatespeech":0.2,"transit":0.1,"roads":0,"autodrive":0,"space":0,"crypto":0,"bankrupt":0.1,"ubitype":-0.1,"wealthtax":-0.2,"statebank":0.2,"airegul":0.2,"cloning":0.1,"stemcell":0,"genedit":0,"dataown":0,"taxloop":0.12},{"sov":30,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0,"minw":null,"minw2":null,"pensreg":null,"centow":0,"murd":0.5,"rape":0.5,"steal":0.5,"child":0.5,"defa":0.5,"incit":0.5,"stprost":null,"broth":null,"esco":null,"hand":0.5,"shot":0.5,"rifle":0.5,"casin":0.5,"oncasin":0.5,"sports":0.5,"homogen":0,"homoad":null,"transgen":0,"transad":null,"tobus":0.5,"tobsel":0.5,"alcus":0.5,"alcsel":0.5,"canus":0.5,"cansel":0.5,"psyus":0.5,"psysel":0.5,"stius":0.5,"stisel":0.5,"opius":0.5,"opisel":0.5,"euth":null,"obsc":1,"warc":0.3,"corf":1,"blasph":1,"treas":0.5,"embe":1,"misce":1,"disse":1.5,"mifu":null,"imman":-25,"immst":0.7,"immwo":1,"immas":1,"immref":1,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0.3,"envreg":null,"womrig":null,"centfun":null,"abort":0.2,"fabort":0.5,"surv":1.2,"datap":0.6,"encry":0.8,"union":0.3,"childlab":-0.2,"ipprop":-0.2,"trial":1.5,"prison":0.8,"polover":1.2,"compulsed":0.5,"religed":0,"homeschool":0.5,"sexed":0.5,"curriculum":0,"healthsys":-0.3,"mentalh":0.2,"vacc":0,"marriage":0.3,"divorce":0.5,"polygamy":0.4,"ageconsent":0,"pressf":1.5,"assembly":1.2,"censor":1.5,"slavery":1,"citizen":0.5,"deathpen":0.3,"socredit":1,"housing":0.2,"landow":0.2,"eminent":0.8,"homeless":0.3,"carbpol":0.1,"nucpol":0,"animal":0,"gmo":0,"water":0,"statemedia":0.5,"langpol":0.4,"artscult":0.1,"hatespeech":0.5,"transit":0,"roads":-0.2,"autodrive":0,"space":0,"crypto":0.3,"bankrupt":0.2,"ubitype":-0.1,"wealthtax":-0.1,"statebank":0,"airegul":0.5,"cloning":0.4,"stemcell":0.2,"genedit":0.1,"dataown":0.3,"taxloop":0.24},{"sov":22,"auto":null,"govg":null,"govc":null,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":0.5,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":1,"rape":1,"steal":1,"child":1,"defa":1,"incit":1,"stprost":0.5,"broth":0.5,"esco":0.5,"hand":0.5,"shot":0.5,"rifle":0.5,"casin":1,"oncasin":1,"sports":1,"homogen":0.5,"homoad":null,"transgen":0.5,"transad":null,"tobus":1,"tobsel":1,"alcus":1,"alcsel":1,"canus":1,"cansel":1,"psyus":1,"psysel":1,"stius":1,"stisel":1,"opius":1,"opisel":1,"euth":null,"obsc":1,"warc":0.3,"corf":1,"blasph":1,"treas":0.5,"embe":1,"misce":1,"disse":1.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":0.4,"envreg":null,"womrig":null,"centfun":null,"abort":0.2,"fabort":null,"surv":null,"datap":0.9,"encry":null,"union":0.8,"childlab":null,"ipprop":-0.5,"trial":-0.2,"prison":1.5,"polover":null,"compulsed":0.8,"religed":-0.5,"homeschool":1,"sexed":0.8,"curriculum":-0.2,"healthsys":0,"mentalh":0.5,"vacc":0,"marriage":1.2,"divorce":1.5,"polygamy":0.8,"ageconsent":0.2,"pressf":3,"assembly":2.5,"censor":2.5,"slavery":3,"citizen":0.8,"deathpen":0.8,"socredit":3,"housing":0,"landow":0,"eminent":1.5,"homeless":1,"carbpol":0.3,"nucpol":0.2,"animal":0.3,"gmo":0.2,"water":-0.3,"statemedia":2,"langpol":1.2,"artscult":0.2,"hatespeech":1,"transit":-0.1,"roads":-0.4,"autodrive":0.3,"space":0,"crypto":1,"bankrupt":0.5,"ubitype":0,"wealthtax":0,"statebank":-0.1,"airegul":1,"cloning":null,"stemcell":0.5,"genedit":0.2,"dataown":1.5,"taxloop":0.6},{"sov":null,"auto":null,"govg":null,"govc":null,"syse":3.5,"sysl":0.5,"sysj":2,"rel":null,"for":null,"cons":null,"righ":1.5,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":1,"rape":1,"steal":1,"child":1,"defa":1,"incit":1,"stprost":1,"broth":1,"esco":1,"hand":0.5,"shot":0.5,"rifle":0.5,"casin":1,"oncasin":1,"sports":1,"homogen":1,"homoad":null,"transgen":1,"transad":null,"tobus":1,"tobsel":1,"alcus":1,"alcsel":1,"canus":1,"cansel":1,"psyus":1,"psysel":1,"stius":1,"stisel":1,"opius":1,"opisel":1,"euth":null,"obsc":1,"warc":0.3,"corf":1,"blasph":1,"treas":0.5,"embe":1,"misce":1,"disse":1.5,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":0.2,"fabort":null,"surv":null,"datap":null,"encry":null,"union":1.5,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":0.8,"mentalh":null,"vacc":0.8,"marriage":1.5,"divorce":null,"polygamy":null,"ageconsent":1,"pressf":null,"assembly":null,"censor":3.5,"slavery":null,"citizen":0.6,"deathpen":null,"socredit":null,"housing":-0.3,"landow":0.5,"eminent":null,"homeless":null,"carbpol":0.5,"nucpol":null,"animal":null,"gmo":0.4,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":0,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":1.5,"cloning":null,"stemcell":null,"genedit":0.5,"dataown":null,"taxloop":1.2},{"sov":42,"auto":null,"govg":null,"govc":null,"syse":0.3,"sysl":2.8,"sysj":2.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":1,"broth":1,"esco":1,"hand":1,"shot":1,"rifle":1,"casin":1,"oncasin":1,"sports":1,"homogen":1,"homoad":null,"transgen":1,"transad":null,"tobus":1,"tobsel":1,"alcus":1,"alcsel":1,"canus":1,"cansel":1,"psyus":1,"psysel":1,"stius":1,"stisel":1,"opius":1,"opisel":1,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":1.2,"mentalh":null,"vacc":null,"marriage":-0.3,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":3},{"sov":28,"auto":null,"govg":null,"govc":4.2,"syse":2.5,"sysl":3,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":1,"shot":1,"rifle":1,"casin":null,"oncasin":null,"sports":null,"homogen":1,"homoad":null,"transgen":1,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":2,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":4.8},{"sov":24,"auto":null,"govg":null,"govc":2,"syse":null,"sysl":null,"sysj":1.5,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":1,"shot":1,"rifle":1,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":0.4,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":7.199999999999999},{"sov":15,"auto":null,"govg":null,"govc":3.8,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":1.5,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":10.799999999999999},{"sov":20,"auto":null,"govg":null,"govc":3,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null},{"sov":null,"auto":null,"govg":null,"govc":1.5,"syse":null,"sysl":null,"sysj":null,"rel":null,"for":null,"cons":null,"righ":null,"minw":null,"minw2":null,"pensreg":null,"centow":null,"murd":null,"rape":null,"steal":null,"child":null,"defa":null,"incit":null,"stprost":null,"broth":null,"esco":null,"hand":null,"shot":null,"rifle":null,"casin":null,"oncasin":null,"sports":null,"homogen":null,"homoad":null,"transgen":null,"transad":null,"tobus":null,"tobsel":null,"alcus":null,"alcsel":null,"canus":null,"cansel":null,"psyus":null,"psysel":null,"stius":null,"stisel":null,"opius":null,"opisel":null,"euth":null,"obsc":null,"warc":null,"corf":null,"blasph":null,"treas":null,"embe":null,"misce":null,"disse":null,"mifu":null,"imman":null,"immst":null,"immwo":null,"immas":null,"immref":null,"inher":null,"reserv":null,"pover":null,"unemp":null,"pens":null,"mininc":null,"basinc":null,"wast":null,"pubpa":null,"conser":null,"solar":null,"nucl":null,"rnd":null,"votr":null,"entreq":null,"envreg":null,"womrig":null,"centfun":null,"abort":null,"fabort":null,"surv":null,"datap":null,"encry":null,"union":null,"childlab":null,"ipprop":null,"trial":null,"prison":null,"polover":null,"compulsed":null,"religed":null,"homeschool":null,"sexed":null,"curriculum":null,"healthsys":null,"mentalh":null,"vacc":null,"marriage":null,"divorce":null,"polygamy":null,"ageconsent":null,"pressf":null,"assembly":null,"censor":null,"slavery":null,"citizen":null,"deathpen":null,"socredit":null,"housing":null,"landow":null,"eminent":null,"homeless":null,"carbpol":null,"nucpol":null,"animal":null,"gmo":null,"water":null,"statemedia":null,"langpol":null,"artscult":null,"hatespeech":null,"transit":null,"roads":null,"autodrive":null,"space":null,"crypto":null,"bankrupt":null,"ubitype":null,"wealthtax":null,"statebank":null,"airegul":null,"cloning":null,"stemcell":null,"genedit":null,"dataown":null,"taxloop":null}];
  $(".loader")["fadeOut"]("fast");
  $(document)["ready"](function() {
    $(document)["bind"]("contextmenu",function(sectorLoop) {
      if(!$(sectorLoop["target"])["is"]("input")) {
        return false
      }
    })
  });
  $("#submit_btn")["click"](function() {

  /* ---------- FORM VALIDATION & UI HANDLERS ---------- */
    var formValid=true;
    $("#contact_form input[required=true], #contact_form textarea[required=true]")["each"](function() {
      $(this)["css"]("border-color","");
      if(!$["trim"]($(this)["val"]())) {
        $(this)["css"]("border-color","red");
        formValid= false
      };
      var emailRegex=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if($(this)["attr"]("type")== "email"&&  !emailRegex["test"]($["trim"]($(this)["val"]()))) {
        $(this)["css"]("border-color","red");
        formValid= false
      }
    });
    if(formValid) {
      post_data=  {
        "subject":$("select[name=subject]")["val"](),"msg":$("textarea[name=message]")["val"]()
      };
      $["post"]("feeder.php",post_data,function(response) {
        if(response["type"]== "error") {
          output= "<div class=\"error\">"+ response["text"]+ "</div>"
        }else  {
          output= "<div class=\"success\">"+ response["text"]+ "</div>";
          $("#contact_form  input[required=true], #contact_form textarea[required=true]")["val"]("");
          $("#contact_form #contact_body")["slideUp"]()
        };
        $("#contact_form #contact_results")["hide"]()["html"](output)["slideDown"]()
      },"json")
    }
  });
  $("#contact_form  input[required=true], #contact_form textarea[required=true]")["keyup"](function() {
    $(this)["css"]("border-color","");
    $("#result")["slideUp"]()
  });
  $(".opener")["click"](function() {
    if($(this)["next"]()["is"](":visible")) {
      $(".submenu1")["fadeOut"]("fast","linear");
      $(".submenu2")["fadeOut"]("fast","linear");
      $(".submenu3")["fadeOut"]("fast","linear");
      $(".submenu4")["fadeOut"]("fast","linear");
      $(".submenu5")["fadeOut"]("fast","linear")
    }else  {
      $(".submenu1")["fadeOut"]("fast","linear");
      $(".submenu2")["fadeOut"]("fast","linear");
      $(".submenu3")["fadeOut"]("fast","linear");
      $(".submenu4")["fadeOut"]("fast","linear");
      $(".submenu5")["fadeOut"]("fast","linear");
      $(this)["next"]()["fadeToggle"]("fast","linear")
    }
  });
  $(".btcz")["click"](function() {
    if($(this)["next"]()["next"]()["is"](":visible")) {
      $(".donop")["fadeOut"]("fast","linear");
      $(".mendon")["removeClass"]("finmenact");
      $(this)["removeClasss"]("cbtcz")
    }else  {
      $(".donop")["fadeOut"]("fast","linear");
      $(".mendon")["removeClass"]("finmenact");
      $(this)["next"]()["next"]()["fadeIn"]("fast","linear");
      $(this)["toggleClass"]("finmenact");
      $(this)["toggleClass"]("cbtcz")
    }
  });
  $(".ethz")["click"](function() {
    if($(this)["next"]()["next"]()["is"](":visible")) {
      $(".donop")["fadeOut"]("fast","linear");
      $(".mendon")["removeClass"]("finmenact");
      $(this)["removeClass"]("cethz")
    }else  {
      $(".donop")["fadeOut"]("fast","linear");
      $(".mendon")["removeClass"]("finmenact");
      $(this)["next"]()["next"]()["fadeIn"]("fast","linear");
      $(this)["toggleClass"]("finmenact");
      $(this)["toggleClass"]("cethz")
    }
  });
  $(".btcco")["click"](function() {
    $(".btcad")["select"]();
    document["execCommand"]("copy")
  });
  $(".ethco")["click"](function() {
    $(".ethad")["select"]();
    document["execCommand"]("copy")
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".finmenop")["length"]=== 0) {
      $(".finmenop")["fadeOut"]("fast","linear");
      $(".finmen")["removeClass"]("finmenact")
    }
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".donop")["length"]=== 0) {
      $(".donop")["fadeOut"]("fast","linear");
      $(".mendon")["removeClass"]("finmenact")
    }
  });
  $(".pubz1")["click"](function() {
    $(this)["removeClass"]("titof");
    $(this)["next"](".priz1")["addClass"]("titof");
    $(this)["next"]()["next"]()["find"](".priz2")["addClass"]("abser");
    $(this)["next"]()["next"]()["find"](".pubz2")["removeClass"]("abser");
    $(this)["next"]()["next"]()["find"](".priz2")["fadeOut"]("fast","swing");
    $(this)["next"]()["next"]()["find"](".pubz2")["fadeIn"]("fast","swing")
  });
  $(".priz1")["click"](function() {
    $(this)["removeClass"]("titof");
    $(this)["prev"](".pubz1")["addClass"]("titof");
    $(this)["next"]()["find"](".pubz2")["addClass"]("abser");
    $(this)["next"]()["find"](".priz2")["removeClass"]("abser");
    $(this)["next"]()["find"](".pubz2")["fadeOut"]("fast","swing");
    $(this)["next"]()["find"](".priz2")["fadeIn"]("fast","swing")
  });
  $(".allspub1")["click"](function() {
    $(".pubz1")["removeClass"]("titof");
    $(".pubz1")["next"](".priz1")["addClass"]("titof");
    $(".priz2")["addClass"]("abser");
    $(".pubz2")["removeClass"]("abser");
    $(".priz2")["fadeOut"]("fast","swing");
    $(".pubz2")["fadeIn"]("fast","swing")
  });
  $(".allspri1")["click"](function() {
    $(".priz1")["removeClass"]("titof");
    $(".priz1")["prev"](".pubz1")["addClass"]("titof");
    $(".pubz2")["addClass"]("abser");
    $(".priz2")["removeClass"]("abser");
    $(".pubz2")["fadeOut"]("fast","swing");
    $(".priz2")["fadeIn"]("fast","swing")
  });
  $(function() {
    $("[data-popup-open]")["on"]("click",function(sectorLoop) {
      var popupId=jQuery(this)["attr"]("data-popup-open");
      $("[data-popup=\""+ popupId+ "\"]")["fadeIn"](350);
      sectorLoop["preventDefault"]()
    });
    $("[data-popup-close]")["on"]("click",function(sectorLoop) {
      var popupId=jQuery(this)["attr"]("data-popup-close");
      $("[data-popup=\""+ popupId+ "\"]")["fadeOut"](350);
      sectorLoop["preventDefault"]()
    })
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".submenu1,.submenu2,.submenu3,.submenu4,.submenu5,.setter,#sett,.select2-results__options,.opener,.slidz,.ui-slider,.boxxer")["length"]=== 0) {
      $(".submenu1")["fadeOut"]("fast","linear");
      $(".submenu2")["fadeOut"]("fast","linear");
      $(".submenu3")["fadeOut"]("fast","linear");
      $(".submenu4")["fadeOut"]("fast","linear");
      $(".submenu5")["fadeOut"]("fast","linear")
    }
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".btdon")["length"]=== 0) {
      $(".btdon")["fadeOut"]("fast","linear")
    }
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".etdon")["length"]=== 0) {
      $(".etdon")["fadeOut"]("fast","linear")
    }
  });
  $("body")["mousedown"](function(sectorLoop) {
    if($(sectorLoop["target"])["closest"](".ltdon")["length"]=== 0) {
      $(".ltdon")["fadeOut"]("fast","linear")
    }
  });
  $(".locker")["click"](function() {
    $(this)["find"]($(".fa"))["toggleClass"]("fa-lock fa-unlock-alt")
  });
  $(".openerz")["click"](function() {
    $(this)["next"]()["fadeToggle"]("fast","linear");
    $(this)["find"]($(".fa"))["toggleClass"]("fa-chevron-down fa-chevron-up")

  });

  /* ---------- MATH UTILITIES ---------- */
  Math["easeIn"]= function(easeT,easeB,easeD,easeC) {
    easeT/= easeD;
    return (easeD- 1)* Math["pow"](easeT,easeC)+ easeB
  };
  $(".tbot")["qtip"]( {
    style:{classes:"qtip-tip",tip:false},
    hide:{fixed:true,delay:250},
    position:{my:"top left",at:"bottom right"},
    events:{show:function(evt,api) {
      var el=api.elements.target;
      var half=$(window).width()/ 2;
      var pos=el.offset();
      if(pos&& pos.left> half) {
        api.set("position.my","top right");
        api.set("position.at","bottom left")
      }else {
        api.set("position.my","top left");
        api.set("position.at","bottom right")
      }
    }}
  });
  $(".tlef")["qtip"]( {
    style:{classes:"qtip-tip",tip:false},
    hide:{fixed:true,delay:250},
    position:{my:"top right",at:"left"}
  });
  $(".ttop")["qtip"]( {
    style:{classes:"qtip-tip",tip:false},
    hide:{fixed:true,delay:250},
    position:{my:"bottom left",at:"right center"}
  });

  $(document).on("wheel",".qtip",function(e) {
    var content=$(this).find(".qtip-content")[0];
    if(!content) return;
    var delta=e.originalEvent.deltaY;
    var atTop=content.scrollTop=== 0;
    var atBottom=content.scrollTop+ content.clientHeight>= content.scrollHeight- 1;
    if((delta< 0&& atTop)|| (delta> 0&& atBottom)) {
      e.preventDefault();
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    content.scrollTop+= delta;
  });

  /* ---------- SELECT2 & SLIDER INITIALIZATION ---------- */
  $(".chooser")["select2"]( {
    minimumResultsForSearch:Infinity,closeOnSelect:false
  });
  $("select")["on"]("change",function(selectEvt) {
    $(".select2-selection__rendered")["removeAttr"]("title");
    $(".select2-selection__choice")["removeAttr"]("title")
  });
  $(document)["on"]("select2:selecting",".chooser",function(e) {
    try {
      if(window.dpAbolished&& e.params.args.data.text=== "Death Penalty"&& $(this)["attr"]("id")!== "deathpen") {
        e["preventDefault"]()
      }
    } catch(ex){}
  });
  $("b[role=\"presentation\"]")["hide"]();
  $(".select2-search, .select2-focusser")["remove"]();
  $("select")["on"]("select2:unselect",function(selectEvt) {
    if(!selectEvt["params"]["originalEvent"]) {
      return
    };
    selectEvt["params"]["originalEvent"]["stopPropagation"]()

  });
  $("#eduprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".eduprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#eduwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".eduwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#eduwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".eduwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#edupex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".edupex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#medprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".medprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#medwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".medwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#medwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".medwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#medpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#bankprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".bankprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#bankwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".bankwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#bankwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".bankwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#bankpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#heaprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".heaprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#heawag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".heawag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#heawagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".heawagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#heapex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heapex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#retprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".retprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#retwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".retwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#retwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".retwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#retpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#manuprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".manuprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#manuwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".manuwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#manuwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".manuwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#manupex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manupex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#infrprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".infrprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#infrwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".infrwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#infrwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".infrwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#infrpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#agrprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".agrprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#agrwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".agrwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#agrwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".agrwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#agrpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#natprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".natprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#natwag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".natwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#natwagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $(".natwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#natpex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natpex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#reacom1")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".reacom1")["html"]("Selling Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#reacom2")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $(".reacom2")["html"]("Renting Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#allsprc")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $("#heaprc")["slider"]("value",ui["value"]);
      $("#eduprc")["slider"]("value",ui["value"]);
      $("#agrprc")["slider"]("value",ui["value"]);
      $("#manuprc")["slider"]("value",ui["value"]);
      $("#bankprc")["slider"]("value",ui["value"]);
      $("#retprc")["slider"]("value",ui["value"]);
      $("#medprc")["slider"]("value",ui["value"]);
      $("#infrprc")["slider"]("value",ui["value"]);
      $("#reaprc")["slider"]("value",ui["value"]);
      $("#natprc")["slider"]("value",ui["value"]);
      $(".heaprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".eduprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".agrprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".manuprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".bankprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".retprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".medprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".infrprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".reaprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".natprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%");
      $(".allsprc")["html"]("Prices: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#allswag")["slider"]( {
    value:0,min:-100,max:100,step:0.1,slide:function(evt,ui) {
      if(ui["value"]> 0) {
        var signChar="+"
      }else  {
        signChar= ""
      };
      $("#heawag")["slider"]("value",ui["value"]);
      $("#eduwag")["slider"]("value",ui["value"]);
      $("#agrwag")["slider"]("value",ui["value"]);
      $("#manuwag")["slider"]("value",ui["value"]);
      $("#bankwag")["slider"]("value",ui["value"]);
      $("#retwag")["slider"]("value",ui["value"]);
      $("#medwag")["slider"]("value",ui["value"]);
      $("#infrwag")["slider"]("value",ui["value"]);
      $("#reawag")["slider"]("value",ui["value"]);
      $("#natwag")["slider"]("value",ui["value"]);
      $(".heawag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".eduwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".agrwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".manuwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".bankwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".retwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".medwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".infrwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".reawag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".natwag")["html"]("Wages: "+ signChar+ ui["value"]+ "%");
      $(".allswag")["html"]("Wages: "+ signChar+ ui["value"]+ "%")
    }
  });
  $("#allswagr")["slider"]( {
    value:0,min:-99,max:400,step:1,slide:function(evt,ui) {
      $("#heawagr")["slider"]("value",ui["value"]);
      $("#eduwagr")["slider"]("value",ui["value"]);
      $("#agrwagr")["slider"]("value",ui["value"]);
      $("#manuwagr")["slider"]("value",ui["value"]);
      $("#bankwagr")["slider"]("value",ui["value"]);
      $("#retwagr")["slider"]("value",ui["value"]);
      $("#medwagr")["slider"]("value",ui["value"]);
      $("#infrwagr")["slider"]("value",ui["value"]);
      $("#reawagr")["slider"]("value",ui["value"]);
      $("#natwagr")["slider"]("value",ui["value"]);
      $(".heawagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".eduwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".agrwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".manuwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".bankwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".retwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".medwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".infrwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".reawagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".natwagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100));
      $(".allswagr")["html"]("Wage Ratio: "+ (ui["value"]+ 100))
    }
  });
  $("#allspex")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heapex")["slider"]("value",ui["value"]);
      $("#edupex")["slider"]("value",ui["value"]);
      $("#agrpex")["slider"]("value",ui["value"]);
      $("#manupex")["slider"]("value",ui["value"]);
      $("#bankpex")["slider"]("value",ui["value"]);
      $("#retpex")["slider"]("value",ui["value"]);
      $("#medpex")["slider"]("value",ui["value"]);
      $("#infrpex")["slider"]("value",ui["value"]);
      $("#reapex")["slider"]("value",ui["value"]);
      $("#natpex")["slider"]("value",ui["value"]);
      $(".heapex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".edupex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".agrpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".manupex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".bankpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".retpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".medpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".infrpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".reapex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".natpex")["html"]("Exports: "+ ui["value"]+ "%");
      $(".allspex")["html"]("Exports: "+ ui["value"]+ "%")
    }
  });
  $("#heaow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heaow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#heafun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heafun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#heainc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heainc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#heacor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heacor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#heacons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".heacons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#heaimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".heaimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#heaexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".heaexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#eduow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".eduow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#edufun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".edufun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#eduinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".eduinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#educor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".educor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#educons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".educons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#eduimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".eduimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#eduexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".eduexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#agrow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#agrfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#agrinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#agrcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#agrcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrcons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#agrimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".agrimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#agrexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".agrexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#manuow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manuow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#manufun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manufun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#manuinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manuinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#manucor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manucor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#manucons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".manucons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#manuimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".manuimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#manuexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".manuexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#bankow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#bankfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#bankinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#bankcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#bankcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankcons")["html"]("Capital Gains Tax: "+ ui["value"]+ "%")
    }
  });
  $("#bankimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".bankimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#bankexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".bankexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#retow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#retfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#retinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#retcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#retcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".retcons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#retimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".retimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#retexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".retexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#medow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#medfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#medinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#medcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#medcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".medcons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#medimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".medimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#medexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".medexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#infrow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#infrfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#infrinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#infrcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#infrcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrcons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#infrimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".infrimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#infrexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".infrexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#natow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#natfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#natinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#natcor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#natcons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".natcons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#natimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".natimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#natexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $(".natexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#reaow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reaow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#reareg0")["slider"]( {
    value:20,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reareg0")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#reareg1")["slider"]( {
    value:6,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reareg1")["html"]("Land Tax: "+ ui["value"]+ "%")
    }
  });
  $("#reareg2")["slider"]( {
    value:6,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reareg2")["html"]("Property Tax: "+ ui["value"]+ "%")
    }
  });
  $("#reareg3")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reareg3")["html"]("Rent Tax: "+ ui["value"]+ "%")
    }
  });
  $("#reareg4")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reareg4")["html"]("Sales Tax: "+ ui["value"]+ "%")
    }
  });
  $("#allsow")["slider"]( {
    value:30,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heaow")["slider"]("value",ui["value"]);
      $("#eduow")["slider"]("value",ui["value"]);
      $("#agrow")["slider"]("value",ui["value"]);
      $("#manuow")["slider"]("value",ui["value"]);
      $("#bankow")["slider"]("value",ui["value"]);
      $("#retow")["slider"]("value",ui["value"]);
      $("#medow")["slider"]("value",ui["value"]);
      $("#infrow")["slider"]("value",ui["value"]);
      $("#reaow")["slider"]("value",ui["value"]);
      $("#natow")["slider"]("value",ui["value"]);
      $(".heaow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".eduow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".agrow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".manuow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".bankow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".retow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".medow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".infrow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".reaow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".natow")["html"]("Public Ownership: "+ ui["value"]+ "%");
      $(".allsow")["html"]("Public Ownership: "+ ui["value"]+ "%")
    }
  });
  $("#allsfun")["slider"]( {
    value:15,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heafun")["slider"]("value",ui["value"]);
      $("#edufun")["slider"]("value",ui["value"]);
      $("#agrfun")["slider"]("value",ui["value"]);
      $("#manufun")["slider"]("value",ui["value"]);
      $("#bankfun")["slider"]("value",ui["value"]);
      $("#retfun")["slider"]("value",ui["value"]);
      $("#medfun")["slider"]("value",ui["value"]);
      $("#infrfun")["slider"]("value",ui["value"]);
      $("#reareg0")["slider"]("value",ui["value"]);
      $("#natfun")["slider"]("value",ui["value"]);
      $(".heafun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".edufun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".agrfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".manufun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".bankfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".retfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".medfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".infrfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".reareg0")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".natfun")["html"]("Subsidies: "+ ui["value"]+ "%");
      $(".allsfun")["html"]("Subsidies: "+ ui["value"]+ "%")
    }
  });
  $("#allsinc")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heainc")["slider"]("values",0,ui["values"][0]);
      $("#eduinc")["slider"]("values",0,ui["values"][0]);
      $("#agrinc")["slider"]("values",0,ui["values"][0]);
      $("#manuinc")["slider"]("values",0,ui["values"][0]);
      $("#bankinc")["slider"]("values",0,ui["values"][0]);
      $("#retinc")["slider"]("values",0,ui["values"][0]);
      $("#medinc")["slider"]("values",0,ui["values"][0]);
      $("#infrinc")["slider"]("values",0,ui["values"][0]);
      $("#reainc")["slider"]("values",0,ui["values"][0]);
      $("#natinc")["slider"]("values",0,ui["values"][0]);
      $("#heainc")["slider"]("values",1,ui["values"][1]);
      $("#eduinc")["slider"]("values",1,ui["values"][1]);
      $("#agrinc")["slider"]("values",1,ui["values"][1]);
      $("#manuinc")["slider"]("values",1,ui["values"][1]);
      $("#bankinc")["slider"]("values",1,ui["values"][1]);
      $("#retinc")["slider"]("values",1,ui["values"][1]);
      $("#medinc")["slider"]("values",1,ui["values"][1]);
      $("#infrinc")["slider"]("values",1,ui["values"][1]);
      $("#reainc")["slider"]("values",1,ui["values"][1]);
      $("#natinc")["slider"]("values",1,ui["values"][1]);
      $(".heainc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".eduinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".agrinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".manuinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".bankinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".retinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".medinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".infrinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".reainc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".natinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".allsinc")["html"]("Personal Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#allscor")["slider"]( {
    range:true,values:[0,50],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heacor")["slider"]("values",0,ui["values"][0]);
      $("#educor")["slider"]("values",0,ui["values"][0]);
      $("#agrcor")["slider"]("values",0,ui["values"][0]);
      $("#manucor")["slider"]("values",0,ui["values"][0]);
      $("#bankcor")["slider"]("values",0,ui["values"][0]);
      $("#retcor")["slider"]("values",0,ui["values"][0]);
      $("#medcor")["slider"]("values",0,ui["values"][0]);
      $("#infrcor")["slider"]("values",0,ui["values"][0]);
      $("#reacor")["slider"]("values",0,ui["values"][0]);
      $("#natcor")["slider"]("values",0,ui["values"][0]);
      $("#heacor")["slider"]("values",1,ui["values"][1]);
      $("#educor")["slider"]("values",1,ui["values"][1]);
      $("#agrcor")["slider"]("values",1,ui["values"][1]);
      $("#manucor")["slider"]("values",1,ui["values"][1]);
      $("#bankcor")["slider"]("values",1,ui["values"][1]);
      $("#retcor")["slider"]("values",1,ui["values"][1]);
      $("#medcor")["slider"]("values",1,ui["values"][1]);
      $("#infrcor")["slider"]("values",1,ui["values"][1]);
      $("#reacor")["slider"]("values",1,ui["values"][1]);
      $("#natcor")["slider"]("values",1,ui["values"][1]);
      $(".heacor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".educor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".agrcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".manucor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".bankcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".retcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".medcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".infrcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".reacor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".natcor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%");
      $(".allscor")["html"]("Corporate Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  $("#allscons")["slider"]( {
    value:12,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $("#heacons")["slider"]("value",ui["value"]);
      $("#educons")["slider"]("value",ui["value"]);
      $("#agrcons")["slider"]("value",ui["value"]);
      $("#manucons")["slider"]("value",ui["value"]);
      $("#bankcons")["slider"]("value",ui["value"]);
      $("#retcons")["slider"]("value",ui["value"]);
      $("#medcons")["slider"]("value",ui["value"]);
      $("#infrcons")["slider"]("value",ui["value"]);
      $("#reacons")["slider"]("value",ui["value"]);
      $("#natcons")["slider"]("value",ui["value"]);
      $(".heacons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".educons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".agrcons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".manucons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".bankcons")["html"]("Capital Gains Tax: "+ ui["value"]+ "%");
      $(".retcons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".medcons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".infrcons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".reacons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".natcons")["html"]("Consumption Tax: "+ ui["value"]+ "%");
      $(".allscons")["html"]("Consumption Tax: "+ ui["value"]+ "%")
    }
  });
  $("#allsimp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $("#heaimp")["slider"]("value",ui["value"]);
      $("#eduimp")["slider"]("value",ui["value"]);
      $("#agrimp")["slider"]("value",ui["value"]);
      $("#manuimp")["slider"]("value",ui["value"]);
      $("#bankimp")["slider"]("value",ui["value"]);
      $("#retimp")["slider"]("value",ui["value"]);
      $("#medimp")["slider"]("value",ui["value"]);
      $("#infrimp")["slider"]("value",ui["value"]);
      $("#reaimp")["slider"]("value",ui["value"]);
      $("#natimp")["slider"]("value",ui["value"]);
      $(".heaimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".eduimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".agrimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".manuimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".bankimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".retimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".medimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".infrimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".reaimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".natimp")["html"]("Import Tariffs: "+ ui["value"]+ "%");
      $(".allsimp")["html"]("Import Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#allsexp")["slider"]( {
    value:25,min:0,max:150,step:0.1,slide:function(evt,ui) {
      $("#heaexp")["slider"]("value",ui["value"]);
      $("#eduexp")["slider"]("value",ui["value"]);
      $("#agrexp")["slider"]("value",ui["value"]);
      $("#manuexp")["slider"]("value",ui["value"]);
      $("#bankexp")["slider"]("value",ui["value"]);
      $("#retexp")["slider"]("value",ui["value"]);
      $("#medexp")["slider"]("value",ui["value"]);
      $("#infrexp")["slider"]("value",ui["value"]);
      $("#reaexp")["slider"]("value",ui["value"]);
      $("#natexp")["slider"]("value",ui["value"]);
      $(".heaexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".eduexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".agrexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".manuexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".bankexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".retexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".medexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".infrexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".reaexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".natexp")["html"]("Export Tariffs: "+ ui["value"]+ "%");
      $(".allsexp")["html"]("Export Tariffs: "+ ui["value"]+ "%")
    }
  });
  $("#mifu")["slider"]( {
    value:10,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".mifu")["html"]("Funding: "+ (ui["value"]).toFixed(1)+ "% of GDP")
    }
  });
  $("#imman")["slider"]( {
    value:0.8,min:0,max:2.5,step:0.1,slide:function(evt,ui) {
      $(".imman")["html"]("Annual Limit: "+ ui["value"]+ "%");
      if(ui["value"]== 2.5) {
        $(".imman")["html"]("Annual Limit: No Limit")
      }
    }
  });
  $("#immst")["slider"]( {
    value:40,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".immst")["html"]("Students: "+ ui["value"]+ "%")
    }
  });
  $("#immwo")["slider"]( {
    value:40,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".immwo")["html"]("Workers: "+ ui["value"]+ "%")
    }
  });
  $("#immas")["slider"]( {
    value:10,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".immas")["html"]("Asylees: "+ ui["value"]+ "%")
    }
  });
  $("#immref")["slider"]( {
    value:10,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".immref")["html"]("Refugees: "+ ui["value"]+ "%")
    }
  });
  $("#inher")["slider"]( {
    range:true,values:[0,6],min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".inher")["html"]("Inheritance Tax: "+ ui["values"][0]+ "% - "+ ui["values"][1]+ "%")
    }
  });
  var wtRateLabels=["None","0.5%","1%","2%","5%","10%","15%","25%"];
  var wtRateValues=[0,0.5,1,2,5,10,15,25];
  $("#wealthtax")["slider"]( {
    value:0,min:0,max:7,step:1,slide:function(evt,ui) {
      $(".wealthtax")["html"]("Wealth Tax: "+ wtRateLabels[ui["value"]]+ " of net worth")
    }
  });
  var wtThreshLabels=["Top 0.01%","Top 0.1%","Top 0.5%","Top 1%","Top 2%","Top 5%"];
  $("#wealthtaxthresh")["slider"]( {
    value:3,min:0,max:5,step:1,slide:function(evt,ui) {
      $(".wealthtaxthresh")["html"]("Wealth Tax Threshold: "+ wtThreshLabels[ui["value"]])
    }
  });
  $("#taxloop")["on"]("change",function() {
    var lv=parseInt($(this)["val"]());
    if(lv>= 7) {
      $("#taxenforce")["val"]("0")["trigger"]("change")["prop"]("disabled",true);
      $("#taxenforce")["next"](".select2-container")["addClass"]("select2-container--disabled");
    }else {
      $("#taxenforce")["prop"]("disabled",false);
      $("#taxenforce")["next"](".select2-container")["removeClass"]("select2-container--disabled");
    }
  });
  $(".compslider")["slider"]({value:0,min:0,max:100,step:1,range:"min",disabled:true});
  $("#statebank")["on"]("change",function() {
    var v=parseInt($(this)["val"]());
    if(v=== 3) {
      $("#centow")["prop"]("disabled",true)["trigger"]("change.select2");
      $("#centow")["next"](".select2-container")["addClass"]("select2-container--disabled");
      $("#centfun")["prop"]("disabled",true)["trigger"]("change.select2");
      $("#centfun")["next"](".select2-container")["addClass"]("select2-container--disabled");
      $("#reserv")["slider"]("disable");
    }else {
      $("#centow")["prop"]("disabled",false)["trigger"]("change.select2");
      $("#centow")["next"](".select2-container")["removeClass"]("select2-container--disabled");
      $("#centfun")["prop"]("disabled",false)["trigger"]("change.select2");
      $("#centfun")["next"](".select2-container")["removeClass"]("select2-container--disabled");
      $("#reserv")["slider"]("enable");
    }
  });
  $("#artscult")["slider"]( {
    value:0.25,min:0,max:0.75,step:0.01,slide:function(evt,ui) {
      $(".artscult")["html"]("Arts &amp; Culture: "+ ui["value"].toFixed(2)+ "% of GDP")
    }
  });
  $("#reserv")["slider"]( {
    value:25,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".reserv")["html"]("Cash Reserve Ratio: "+ ui["value"]+ "%")
    }
  });
  $("#pover")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".pover")["html"]("Poverty Fund: "+ (ui["value"]* 0.02).toFixed(2)+ "% of GDP")
    }
  });
  $("#unemp")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".unemp")["html"]("Unemployed Fund: "+ (ui["value"]* 0.08).toFixed(2)+ "% of GDP")
    }
  });
  $("#pens")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".pens")["html"]("Pension Fund: "+ (ui["value"]* 0.125).toFixed(2)+ "% of GDP")
    }
  });
  $("#mininc")["slider"]( {
    value:25,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".mininc")["html"]("Minimum Income: "+ (ui["value"]* 0.08).toFixed(2)+ "% of GDP")
    }
  });
  $("#basinc")["slider"]( {
    value:3,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".basinc")["html"]("Basic Income: "+ (ui["value"]).toFixed(1)+ "% of GDP");
      if(ui["value"]== 0) {
        $("#ubitype")["val"]("3")["trigger"]("change.select2");
        $("#ubitype")["prop"]("disabled",true);
        $("#ubitype")["next"](".select2-container")["addClass"]("select2-container--disabled");
      } else {
        $("#ubitype")["prop"]("disabled",false);
        $("#ubitype")["next"](".select2-container")["removeClass"]("select2-container--disabled");
      }
    }
  });
  $("#wast")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".wast")["html"]("Waste Disposal: "+ (ui["value"]* 0.0025).toFixed(3)+ "% of GDP")
    }
  });
  $("#pubpa")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".pubpa")["html"]("Public Parks: "+ (ui["value"]* 0.0005).toFixed(4)+ "% of GDP")
    }
  });
  $("#conser")["slider"]( {
    value:50,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".conser")["html"]("Conservation: "+ (ui["value"]* 0.015).toFixed(2)+ "% of GDP")
    }
  });
  $("#solar")["slider"]( {
    value:25,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".solar")["html"]("Solar Energy: "+ (ui["value"]* 0.005).toFixed(3)+ "% of GDP")
    }
  });
  $("#nucl")["slider"]( {
    value:25,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".nucl")["html"]("Nuclear Energy: "+ (ui["value"]* 0.005).toFixed(3)+ "% of GDP")
    }
  });
  $("#rnd")["slider"]( {
    value:8,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".rnd")["html"]("Science: "+ (ui["value"]).toFixed(1)+ "% of GDP")
    }
  });
  $("#edugdp")["slider"]( {
    value:4.1,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".edugdp")["html"]("Education: "+ ui["value"]+ "%")
    }
  });
  $("#medgdp")["slider"]( {
    value:3.1,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".medgdp")["html"]("Media: "+ ui["value"]+ "%")
    }
  });
  $("#bankgdp")["slider"]( {
    value:9.7,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".bankgdp")["html"]("Finance: "+ ui["value"]+ "%")
    }
  });
  $("#heagdp")["slider"]( {
    value:9,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".heagdp")["html"]("Healthcare: "+ ui["value"]+ "%")
    }
  });
  $("#retgdp")["slider"]( {
    value:13.6,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".retgdp")["html"]("Retail: "+ ui["value"]+ "%")
    }
  });
  $("#manugdp")["slider"]( {
    value:27.8,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".manugdp")["html"]("Manufacturing: "+ ui["value"]+ "%")
    }
  });
  $("#infrgdp")["slider"]( {
    value:4.4,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".infrgdp")["html"]("Construction: "+ ui["value"]+ "%")
    }
  });
  $("#agrgdp")["slider"]( {
    value:1.4,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".agrgdp")["html"]("Agriculture: "+ ui["value"]+ "%")
    }
  });
  $("#reagdp")["slider"]( {
    value:8.8,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".reagdp")["html"]("Real Estate: "+ ui["value"]+ "%")
    }
  });
  $("#natgdp")["slider"]( {
    value:2.6,min:0.1,max:100,step:0.1,slide:function(evt,ui) {
      $(".natgdp")["html"]("Natural Resources: "+ ui["value"]+ "%")
    }
  });
  $("#gdpval")["slider"]( {
    value:18000,min:100,max:20000,step:0.10,slide:function(evt,ui) {
      $(".gdpval")["html"]("GDP Multiplier: "+ ui["value"]["toLocaleString"]())
    }
  });
  $("#pointz")["slider"]( {
    value:100,min:0,max:100,step:0.1,slide:function(evt,ui) {
      $(".pointz")["html"]("Pointer Size: "+ ui["value"]+ "%")
    }
  });
  $("#sov")["change"](function() {
    if($("#sov")["val"]()== 4) {
      $(".select2-selection__choice")["addClass"]("deleter");
      $(".chooser")["prop"]("disabled",true);
      $("#sov")["prop"]("disabled",false);
      $(".slidz")["slider"]("disable")
    }else  {
      $(".chooser")["prop"]("disabled",false);
      $(".slidz")["slider"]("enable");
      $(".select2-selection__choice")["removeClass"]("deleter");
      $("#centow")["change"](function() {
        if($(this)["val"]()== 2) {
          $("#centfun")["val"]("")["trigger"]("change.select2");
          $("#centfun")["prop"]("disabled",true);
          $("#reserv")["slider"]("value",0);
          $(".reserv")["html"]("Cash Reserve Ratio: 0%");
          $("#reserv")["slider"]("disable")
        }else  {
          $("#centfun")["prop"]("disabled",false);
          $("#reserv")["slider"]("enable")
        }
      })["trigger"]("change");
      $("#syse,#sysl,#sysj,#womrig")["change"](function() {
        if($("#syse")["val"]()>= 2&& $("#sysl")["val"]()>= 2&& $("#sysj")["val"]()>= 2) {
          $("#womrig")["children"]("option[value=3]")["prop"]("selected",false)["trigger"]("change.select2");
          $("#votr")["val"](["0","1","2","3"])["trigger"]("change.select2");
          $("#votr")["prop"]("disabled",true)
        }else  {
          $("#votr")["prop"]("disabled",false)
        }
      })["trigger"]("change");
      $("#homogen")["change"](function() {
        if($(this)["val"]()>= 3) {
          $("#homoad")["prop"]("disabled",true);
          $("#homoad")["val"]("1")["trigger"]("change.select2")
        }else  {
          $("#homoad")["prop"]("disabled",false)
        }
      })["trigger"]("change");
      $("#transgen")["change"](function() {
        if($(this)["val"]()>= 3) {
          $("#transad")["prop"]("disabled",true);
          $("#transad")["val"]("2")["trigger"]("change.select2")
        }else  {
          $("#transad")["prop"]("disabled",false)
        }
      })["trigger"]("change");
      $("#minw")["change"](function() {
        if($(this)["val"]()== 2) {
          $("#minw2")["prop"]("disabled",true);
          $("#minw2")["val"]("1")["trigger"]("change.select2")
        }else  {
          $("#minw2")["prop"]("disabled",false)
        }
      })["trigger"]("change");
      if($(this)["val"]()!= 3) {
        $("#sovow")["val"]("0")["trigger"]("change.select2");
        $("#sovow")["prop"]("disabled",true)
      }
    }
  })["trigger"]("change");
  $("#abort")["change"](function() {
    if($(this)["val"]()[0]== 0) {
      $(this)["val"](["0"])["trigger"]("change.select2")
    };
    var abortAllowed=$(this)["val"]()&& $(this)["val"]()["length"]> 0;
    if(abortAllowed) {
      $("#gestlim")["prop"]("disabled",false);
      $("#abortwait")["prop"]("disabled",false);
      $("#abortfund")["prop"]("disabled",false)
    }else {
      $("#gestlim")["prop"]("disabled",true);
      $("#abortwait")["prop"]("disabled",true);
      $("#abortfund")["prop"]("disabled",true)
    }
  })["trigger"]("change");
  $("#abort,#fabort")["change"](function() {
    for(i= 0;
    i< 4;
    i++) {
      if($("#abort")["val"]()[0]!= 0&& $("#fabort")["val"]()[i]== 1) {
        $("#abort")["children"]("option[value=3]")["prop"]("selected",true)["trigger"]("change.select2")
      }
    }
  })["trigger"]("change");
  $("#govg,#syse")["change"](function() {
    if($("#govg")["val"]()== 1&& $("#syse")["val"]()== 0) {
      $("#syse")["val"]("1")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  $("#govc,#rel")["change"](function() {
    if($("#govc")["val"]()== 5&& ($("#rel")["val"]()== 1|| $("#rel")["val"]()== 0)) {
      $("#rel")["val"]("2")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  window.dpAbolished=false;
  $("#deathpen")["change"](function() {
    var dp=$(this)["val"]();
    var wasAbolished=window.dpAbolished;
    window.dpAbolished=(dp== 0|| dp== 1);
    if(window.dpAbolished&& !wasAbolished) {
      $(".chooser")["each"](function() {
        var sel=$(this);
        if(sel["attr"]("id")== "deathpen") return;
        sel["find"]("option")["each"](function() {
          if($(this)["text"]()== "Death Penalty"&& $(this)["is"](":selected")) {
            sel["val"](String(parseInt($(this)["val"]())- 1))["trigger"]("change.select2")
          }
        })
      })
    }
  })["trigger"]("change");
  $("#censor")["change"](function() {
    if($(this)["val"]()== 4) {
      $("#oncasin")["prop"]("disabled",true);
      $("#cryptogamb")["prop"]("disabled",true);
      $("#lootbox")["prop"]("disabled",true);
      $("#datap")["prop"]("disabled",true);
      $("#encry")["prop"]("disabled",true);
      $("#surv")["val"]("0")["trigger"]("change.select2")
    }else {
      $("#oncasin")["prop"]("disabled",false);
      $("#cryptogamb")["prop"]("disabled",false);
      $("#lootbox")["prop"]("disabled",false);
      $("#datap")["prop"]("disabled",false);
      $("#encry")["prop"]("disabled",false)
    }
  })["trigger"]("change");
  $("#marriage")["change"](function() {
    if($(this)["val"]()== 5) {
      $("#divorce")["prop"]("disabled",true);
      $("#polygamy")["prop"]("disabled",true)
    }else {
      $("#divorce")["prop"]("disabled",false);
      $("#polygamy")["prop"]("disabled",false)
    }
  })["trigger"]("change");
  $("#compulsed")["change"](function() {
    if($(this)["val"]()== 0) {
      $("#homeschool")["prop"]("disabled",true);
      $("#sexed")["prop"]("disabled",true);
      $("#curriculum")["prop"]("disabled",true);
      $("#religed")["prop"]("disabled",true)
    }else {
      $("#homeschool")["prop"]("disabled",false);
      $("#sexed")["prop"]("disabled",false);
      $("#curriculum")["prop"]("disabled",false);
      $("#religed")["prop"]("disabled",false)
    }
  })["trigger"]("change");
  $("#rel,#religed")["change"](function() {
    if($("#rel")["val"]()== 0&& ($("#religed")["val"]()== 0|| $("#religed")["val"]()== 1)) {
      $("#religed")["val"]("2")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  $("#slavery")["change"](function() {
    if($(this)["val"]()== 0) {
      $("#prison")["find"]("option[value=3]")["prop"]("disabled",true);
      if($("#prison")["val"]()== 3) { $("#prison")["val"]("2")["trigger"]("change.select2") }
    }else {
      $("#prison")["find"]("option[value=3]")["prop"]("disabled",false)
    }
  })["trigger"]("change");
  $("#pressf")["change"](function() {
    if($(this)["val"]()== 3&& ($("#censor")["val"]()== 0|| $("#censor")["val"]()== 1)) {
      $("#censor")["val"]("2")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  $("#statemedia")["change"](function() {
    var sm=$(this)["val"]();
    var medOw=$("#medow")["slider"]("value");
    if(sm== 1&& medOw< 20) {
      $("#medow")["slider"]("value",20);
      $(".medow")["html"]("Public Ownership: 20%")
    };
    if(sm== 2&& medOw< 50) {
      $("#medow")["slider"]("value",50);
      $(".medow")["html"]("Public Ownership: 50%")
    };
    if(sm== 3&& medOw< 80) {
      $("#medow")["slider"]("value",80);
      $(".medow")["html"]("Public Ownership: 80%")
    }
  })["trigger"]("change");
  $("#sysj")["on"]("change",function() {
    var jv=parseInt($(this)["val"]());
    $("#trial")["prop"]("disabled",false);
    $("#prison")["prop"]("disabled",false);
    $("#polover")["prop"]("disabled",false);
    $("#trial")["find"]("option")["prop"]("disabled",false);
    $("#trial")["next"](".select2-container")["removeClass"]("select2-locked");
    $("#trial")["off"]("select2:opening.lockjv0");
    if(jv=== 0) {
      $("#trial")["val"]("3")["trigger"]("change.select2");
      $("#trial")["next"](".select2-container")["addClass"]("select2-locked");
      $("#trial")["on"]("select2:opening.lockjv0",function(e){e.preventDefault();});
    }
    if(jv=== 3) {
      $("#trial")["find"]("option[value=0]")["prop"]("disabled",true);
      if($("#trial")["val"]()=== "0") $("#trial")["val"]("1")["trigger"]("change.select2");
    }
    if(jv=== 4|| jv=== 5|| jv=== 7|| jv=== 10) {
      $("#trial")["prop"]("disabled",true);
    }
    if(jv=== 6) {
      $("#trial")["prop"]("disabled",true);
      $("#polover")["val"]("2")["trigger"]("change.select2");
      $("#polover")["prop"]("disabled",true);
    }
    if(jv=== 8) {
      $("#trial")["val"]("2")["trigger"]("change.select2");
      $("#trial")["prop"]("disabled",true);
    }
  })["trigger"]("change");
  $("#moralpolice")["on"]("change",function() {
    var mv=parseInt($(this)["val"]());
    if(mv=== 0) {
      $("#moralscope")["prop"]("disabled",true);
      $("#moralscope")["next"](".select2-container")["addClass"]("select2-container--disabled");
      $("#moralpenalty")["prop"]("disabled",true);
      $("#moralpenalty")["next"](".select2-container")["addClass"]("select2-container--disabled");
    }else {
      $("#moralscope")["prop"]("disabled",false);
      $("#moralscope")["next"](".select2-container")["removeClass"]("select2-container--disabled");
      $("#moralpenalty")["prop"]("disabled",false);
      $("#moralpenalty")["next"](".select2-container")["removeClass"]("select2-container--disabled");
    }
  })["trigger"]("change");
  $("#healthsys")["change"](function() {
    if($(this)["val"]()== 5) {
      $("#mentalh")["val"]("3")["trigger"]("change.select2");
      $("#mentalh")["prop"]("disabled",true);
      $("#vacc")["val"]("3")["trigger"]("change.select2");
      $("#vacc")["prop"]("disabled",true)
    }else {
      $("#mentalh")["prop"]("disabled",false);
      $("#vacc")["prop"]("disabled",false)
    }
  })["trigger"]("change");
  $("#socredit,#surv")["change"](function() {
    if($("#socredit")["val"]()== 3&& $("#surv")["val"]()== 2) {
      $("#surv")["val"]("1")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  $("#ageconsent,#marriage")["change"](function() {
    if($("#ageconsent")["val"]()== 4&& $("#marriage")["val"]()== 5) {
      $("#ageconsent")["val"]("3")["trigger"]("change.select2")
    }
  })["trigger"]("change");
  $("#childlab,#compulsed")["change"](function() {
  })["trigger"]("change");

  $("#womrig")["change"](function() {
    var womrigCount=0;
    for(i= 0;
    i< 5;
    i++) {
      if($("#womrig")["val"]()[i]) {
        var womrigCount=womrigCount+ spectrumWeights6[$("#womrig")["val"]()[i]]["womrig"]
      }
    };
    if(womrigCount> 0) {
      $("#womrig")["children"]("option[value=4]")["prop"]("selected",false)["trigger"]("change.select2");
      $("#womrig")["children"]("option[value=5]")["prop"]("selected",false)["trigger"]("change.select2")
    }

  })["trigger"]("change");

  /* ---------- CHART CONFIGURATION ----------
     Scatter (political spectrum), polar radar, sector bars, budget pies */
  var scatterData= {
    datasets:[ {
      label:"My First dataset",xAxisID:"x-axis-1",yAxisID:"y-axis-1",data:[ {
        x:0,y:0
      }]
    }]
  };
  $["each"](scatterData["datasets"],function(i,dataset) {
    dataset["borderColor"]= "hsla(0, 0%, 0%, 0)";
    dataset["backgroundColor"]= "hsla(0, 0%, 0%, 0)";
    dataset["pointBorderColor"]= "hsla(220, 6%, 20%, 0.85)";
    dataset["pointBackgroundColor"]= "hsla(220, 6%, 20%, 0.7)";
    dataset["pointHoverBackgroundColor"]= "hsla(220, 6%, 20%, 0.85)";
    dataset["pointRadius"]= 0;
    dataset["pointHitRadius"]= 0;
    dataset["pointHoverRadius"]= 0;
    dataset["pointBorderWidth"]= 0
  });
  var canvasCtx=document["getElementById"]("mainer")["getContext"]("2d");
  window["myScatter"]= Chart.Scatter(canvasCtx, {
    data:scatterData,options: {
      tooltips: {
        enabled:false,backgroundColor:"hsla(220, 6%, 5%, 0.79)"
      },maintainAspectRatio:false,legend: {
        scaleShowVerticalLines:true,position:false
      },responsive:true,hoverMode:"single",title: {
        display:false,text:"Filteries"
      },scales: {
        xAxes:[ {
          display:false,position:"bottom",gridLines: {
            zeroLineColor:"rgba(0,0,0,1)"
          }
        }],yAxes:[ {
          type:"linear",display:false,position:"left",id:"y-axis-1"
        }, {
          type:"linear",display:false,position:"right",reverse:true,id:"y-axis-2",gridLines: {
            drawOnChartArea:false
          }
        }]
      }
    }
  });
  var mainerEl=document["getElementById"]("mainer");
  var mainerCtx=mainerEl["getContext"]("2d");
  var mainerJq=$("#mainer");
  var mainerParent=mainerJq["parent"]();
  mainerJq["width"](mainerParent["width"]());
  mainerJq["height"](mainerParent["width"]());
  var polarConfig= {
    data: {
      datasets:[ {
        data:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],borderWidth:0.4,backgroundColor:"hsla(0, 0%, 74%, 0.2)",pointBackgroundColor:["hsla(284, 82%, 41%, 0.7)","hsla(333, 67%, 35%, 0.5)","hsla(6, 72%, 47%, 0.5)","hsla(30, 85%, 45%, 0.5)","hsla(355, 82%, 41%, 0.7)","hsla(55, 55%, 56%, 0.5)","hsla(96, 60%, 65%, 0.5)","hsla(121, 42%, 42%, 0.5)","hsla(128, 82%, 41%, 0.7)","hsla(164, 40%, 60%, 0.5)","hsla(204, 42%, 54%, 0.5)","hsla(240, 53%, 45%, 0.5)","hsla(239, 82%, 41%, 0.7)","hsla(259, 32%, 58%, 0.5)","hsla(273, 42%, 46%, 0.5)","hsla(301, 52%, 49%, 0.5)"],radius:4,pointRadius:4,pointHoverRadius:6,pointHitRadius:4
      }],labels:["","","","","","","","","","","","","","","",""],infoz:["Increases with policies that promote government","Increases with policies that limit","Increases with policies that promote","Increases with policies that promote","","Increases with policies that promote","Increases with policies that promote","Increases with policies that promote","Increases with policies that reduce government","Increases with policies that promote","Increases with policies that promote","Increases with policies that promote","","Increases with policies that promote","Increases with policies that promote","Increases with policies that promote"],infoz2:["control over social and economic matters","civil or political rights","the interests of native citizens","family, religious or traditional values","","low public spending","private ownership","economic deregulations","control over social and economic matters","civil or political rights","diverse communities","secular or modern values","","high public spending","public ownership","economic regulations"]
    },options: {
      tooltips: {
        callbacks: {
          label:function(tooltipItem,chartData) {
            var tooltipLines=[chartData["infoz"][tooltipItem["index"]]];
            tooltipLines["push"](chartData["infoz2"][tooltipItem["index"]]);
            return tooltipLines
          }
        },titleFontSize:12,bodyFontSize:11,backgroundColor:"hsla(220, 6%, 5%, 0.79)"
      },responsive:true,maintainAspectRatio:false,legend: {
        display:false
      },title: {
        display:false
      },scale: {
        ticks: {
          beginAtZero:true,display:false
        },reverse:false
      },animation: {
        animateRotate:false,animateScale:true
      }
    }
  };
  var canvasCtx=document["getElementById"]("polarz");
  window["myPolarArea"]= Chart.Radar(canvasCtx,polarConfig);
  var sectorChartConfig= {
    labels:["Government","Education","Media","Finance","Healthcare","Retail","Manufacturing","Construction","Agriculture","Natural Resources","Real Estate"],datasets:[ {
      label:"Publicly Owned & Funded",backgroundColor:"hsla(273, 42%, 46%, 0.5)",borderWidth:0,data:[0,0,0,0,0,0,0,0,0,0,0]
    }, {
      label:"Publicly Owned for Profit",backgroundColor:"hsla(259, 32%, 58%, 0.5)",data:[0,0,0,0,0,0,0,0,0,0,0]
    }, {
      label:"Privately Owned & Publicly Funded",backgroundColor:"hsla(30, 55%, 45%, 0.5)",data:[0,0,0,0,0,0,0,0,0,0,0]
    }, {
      label:"Privately Owned for Profit",backgroundColor:"hsla(55, 55%, 56%, 0.5)",data:[0,0,0,0,0,0,0,0,0,0,0]
    }]
  };
  var canvasCtx=document["getElementById"]("secter")["getContext"]("2d");
  window["myHorizontalBar"]=  new Chart(canvasCtx, {
    type:"horizontalBar",data:sectorChartConfig,options: {
      elements: {
        rectangle: {
          borderWidth:0
        }
      },responsive:false,elements: {
        rectangle: {
          borderColor:"#333",borderSkipped:"left"
        }
      },responsive:true,maintainAspectRatio:false,legend: {
        position:"bottom",labels: {
          fontColor:"#aeaeb7",boxWidth:3,fontSize:11
        }
      },scales: {
        xAxes:[ {
          display:false,ticks: {
            
          },stacked:true
        }],yAxes:[ {
          ticks: {
            mirror:true
          },categoryPercentage:0.93,barPercentage:1,stacked:true
        }]
      },title: {
        display:false,text:"Sectors"
      },tooltips: {
        backgroundColor:"hsla(220, 6%, 5%, 0.79)",bodyFontSize:11,callbacks: {
          label:function(tooltipItem,chartData) {
            var sectorPct=(chartData["datasets"][tooltipItem["datasetIndex"]]["data"][tooltipItem["index"]]/ (chartData["datasets"][0]["data"][tooltipItem["index"]]+ chartData["datasets"][1]["data"][tooltipItem["index"]]+ chartData["datasets"][2]["data"][tooltipItem["index"]]+ chartData["datasets"][3]["data"][tooltipItem["index"]]))* 100;
            if(tooltipItem["index"]< 1) {
              var sectorIdx=10
            }else  {
              var sectorIdx=tooltipItem["index"]- 1
            };
            var sectorGdpVal=sectorPct* sectors[sectorIdx]["sectgdp"]/ 100;
            var sectorTooltip=[chartData["datasets"][tooltipItem["datasetIndex"]]["label"]];
            sectorTooltip["push"]("$"+ sectorGdpVal["toLocaleString"](undefined, {
              maximumFractionDigits:1
            })+ " Bln");
            sectorTooltip["push"](sectorPct["toFixed"]()+ "% of Sector");
            return sectorTooltip
          }
        }
      },scales: {
        xAxes:[ {
          ticks: {
            
          },stacked:true
        }],yAxes:[ {
          ticks: {
            mirror:true
          },categoryPercentage:0.93,barPercentage:1,stacked:true
        }]
      }
    }
  });
  var budgetIncomeConfig= {
    type:"horizontalBar",data: {
      datasets:[ {
        borderWidth:1,data:[0,0,0,0,0,0,0,0,0,0],gdpz:0,id:["Corporate Taxes","Personal Taxes","Consumption Taxes","Import Tariffs","Export Tariffs","Inheritance Tax","Wealth Tax","Real Estate","Public Industries","Other"],backgroundColor:["hsla(12, 74%, 51%, 0.45)","hsla(191, 74%, 51%, 0.45)","hsla(263, 77%, 66%, 0.49)","hsla(220, 77%, 62%, 0.55)","hsla(83, 60%, 55%, 0.59)","hsla(36, 74%, 51%, 0.45)","hsla(320, 74%, 51%, 0.45)","hsla(214, 90%, 70%, 0.45)","hsla(160, 74%, 51%, 0.45)","hsla(219, 35%, 86%, 0.45)"],label:""
      }],labels:["Corporate Taxes","Personal Taxes","Consumption Taxes","Import Tariffs","Export Tariffs","Inheritance Tax","Wealth Tax","Real Estate","Public Industries","Other"]
    },options: {
      responsive:true,maintainAspectRatio:false,legend: {
        display:false,position:"left",labels: {
          fontColor:"#aeaeb7",boxWidth:8,fontSize:11
        }
      },scales: {
        xAxes:[ {
          display:false,ticks: {
            
          },stacked:true
        }],yAxes:[ {
          ticks: {
            mirror:true
          },categoryPercentage:0.93,barPercentage:1,stacked:true
        }]
      },title: {
        display:true,text:"Income: "
      },animation: {
        animateScale:false,animateRotate:true
      },tooltips: {
        backgroundColor:"hsla(220, 6%, 5%, 0.79)",bodyFontSize:11,callbacks: {
          label:function(tooltipItem,chartData) {
            var sectorTooltip=["$"+ chartData["datasets"][0]["data"][tooltipItem["index"]]["toLocaleString"](undefined, {
              maximumFractionDigits:1
            })+ " Bln"];
            var budgetIncomeTotal=chartData["datasets"][0]["data"][0]+ chartData["datasets"][0]["data"][1]+ chartData["datasets"][0]["data"][2]+ chartData["datasets"][0]["data"][3]+ chartData["datasets"][0]["data"][4]+ chartData["datasets"][0]["data"][5]+ chartData["datasets"][0]["data"][6]+ chartData["datasets"][0]["data"][7];
            sectorTooltip["push"](((chartData["datasets"][0]["data"][tooltipItem["index"]]/ budgetIncomeTotal)* 100)["toFixed"](1)+ "% of Income  ");
            sectorTooltip["push"](((chartData["datasets"][0]["data"][tooltipItem["index"]]/ chartData["datasets"][0]["gdpz"])* 100)["toFixed"](1)+ "% of GDP");
            return sectorTooltip
          },title:function(tooltipItem,chartData) {
            return chartData["datasets"][0]["id"][tooltipItem[0]["index"]]
          }
        }
      }
    }
  };
  var canvasCtx=document["getElementById"]("pier")["getContext"]("2d");
  window["myDoughnut"]=  new Chart(canvasCtx,budgetIncomeConfig);
  Chart["defaults"]["global"]["defaultFontColor"]= "#aeaeb7";
  var budgetSpendConfig= {
    type:"horizontalBar",data: {
      datasets:[ {
        borderWidth:1,data:[0,0,0,0,0,0,0],gdpz:0,id:["Military","Welfare","Education","Science","Environment","Housing","Industries","Other"],backgroundColor:["hsla(0, 74%, 51%, 0.45)","hsla(250, 74%, 51%, 0.45)","hsla(55, 74%, 51%, 0.45)","hsla(220, 74%, 51%, 0.45)","hsla(130, 74%, 51%, 0.45)","hsla(214, 90%, 70%, 0.45)","hsla(160, 74%, 51%, 0.45)","hsla(219, 35%, 86%, 0.45)"],label:""
      }],labels:["Military","Welfare","Education","Science","Environment","Housing","Industries","Other"]
    },options: {
      responsive:true,maintainAspectRatio:false,legend: {
        display:false,position:"left",labels: {
          fontColor:"#aeaeb7",boxWidth:8,fontSize:11
        }
      },scales: {
        xAxes:[ {
          display:false,ticks: {
            
          },stacked:true
        }],yAxes:[ {
          ticks: {
            mirror:true
          },categoryPercentage:0.93,barPercentage:1,stacked:true
        }]
      },title: {
        display:true,text:"Spending: "
      },animation: {
        animateScale:false,animateRotate:true
      },tooltips: {
        backgroundColor:"hsla(220, 6%, 5%, 0.79)",bodyFontSize:11,callbacks: {
          label:function(tooltipItem,chartData) {
            var sectorTooltip=["$"+ chartData["datasets"][0]["data"][tooltipItem["index"]]["toLocaleString"](undefined, {
              maximumFractionDigits:1
            })+ " Bln"];
            var budgetIncomeTotal=chartData["datasets"][0]["data"][0]+ chartData["datasets"][0]["data"][1]+ chartData["datasets"][0]["data"][2]+ chartData["datasets"][0]["data"][3]+ chartData["datasets"][0]["data"][4]+ chartData["datasets"][0]["data"][5]+ chartData["datasets"][0]["data"][6];
            sectorTooltip["push"](((chartData["datasets"][0]["data"][tooltipItem["index"]]/ budgetIncomeTotal)* 100)["toFixed"](1)+ "% of Spending");
            sectorTooltip["push"](((chartData["datasets"][0]["data"][tooltipItem["index"]]/ chartData["datasets"][0]["gdpz"])* 100)["toFixed"](1)+ "% of GDP");
            return sectorTooltip
          },title:function(tooltipItem,chartData) {
            return chartData["datasets"][0]["id"][tooltipItem[0]["index"]]
          }
        }
      }
    }
  };
  var canvasCtx=document["getElementById"]("pier2")["getContext"]("2d");
  window["myDoughnut2"]=  new Chart(canvasCtx,budgetSpendConfig);
  Chart["defaults"]["global"]["defaultFontColor"]= "#aeaeb7";
  function budgetSpendTotal() {
    $["each"](scatterData["datasets"],function(i,dataset) {
      dataset["pointRadius"]= $("#pointz")["slider"]("value")/ 12;
      dataset["pointHoverRadius"]= $("#pointz")["slider"]("value")/ 12
    });
    $("#mainer")["css"]("background-image","url("+ chartAssets[0]["shadz"]+ "),url("+ chartAssets[$("#linez")["val"]()]["linez"]+ "),url("+ chartAssets[$("#lblz")["val"]()]["lblz"]+ "),url("+ chartAssets[$("#chaz")["val"]()]["chaz"]+ ")");
    $("#mainer")["css"]("transition","0.35s");
    if($("#tooler")["val"]()== 1) {
      $("*")["qtip"]("disable")
    }else  {
      if($("#tooler")["val"]()== 0) {
        $("*")["qtip"]("enable")
      }
    };
    if($("#imman")["slider"]("value")== 0) {
      $("#entreq")["val"](["0","1","2","3"])["trigger"]("change.select2");
      $("#entreq")["prop"]("disabled",true);
      $("#immst")["slider"]("disable");
      $("#immwo")["slider"]("disable");
      $("#immas")["slider"]("disable");
      $("#immref")["slider"]("disable")
    }else  {
      if($("#sov")["val"]()!= 4&& $("#imman")["slider"]("value")!= 0) {
        $("#entreq")["prop"]("disabled",false);
        $("#immst")["slider"]("enable");
        $("#immwo")["slider"]("enable");
        $("#immas")["slider"]("enable");
        $("#immref")["slider"]("enable")
      }
    };

  /* ============================================================================
     MAIN CALCULATION FUNCTION
     Called on every slider/selector change. Reads all inputs, computes:
     - Political spectrum position (9 weighted axes)
     - Budget income/spending and balance
     - Sector GDP and chart data
     ============================================================================ */
    var sovVal=$("#sov")["val"]();
    for(i= 0;
    i< sectors["length"];
    i++) {
      if($("#"+ sectors[i]["id"]+ "ow")["slider"]("value")== 100) {
        $("#"+ sectors[i]["id"]+ "fun")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "inc")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "cor")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "cons")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "imp")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "exp")["slider"]("disable")
      }else  {
        if(sovVal!= 4) {
          $("#"+ sectors[i]["id"]+ "fun")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "inc")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "cor")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "cons")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "imp")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "exp")["slider"]("enable")
        }
      };
      if($("#"+ sectors[i]["id"]+ "ow")["slider"]("value")== 0) {
        $("#"+ sectors[i]["id"]+ "prc")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "wag")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "wagr")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "pex")["slider"]("disable")
      }else  {
        if(sovVal!= 4) {
          $("#"+ sectors[i]["id"]+ "prc")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "wag")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "wagr")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "pex")["slider"]("enable")
        }
      };
      if($("#"+ sectors[i]["id"]+ "wag")["slider"]("value")==  -100) {
        $("#"+ sectors[i]["id"]+ "wagr")["slider"]("disable")
      }else  {
        if($("#"+ sectors[i]["id"]+ "ow")["slider"]("value")!= 0&& sovVal!= 4) {
          $("#"+ sectors[i]["id"]+ "wagr")["slider"]("enable")
        }
      };
      if($("#"+ sectors[i]["id"]+ "fun")["slider"]("value")== 100) {
        $("#"+ sectors[i]["id"]+ "inc")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "cor")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "imp")["slider"]("disable");
        $("#"+ sectors[i]["id"]+ "exp")["slider"]("disable")
      }else  {
        if($("#"+ sectors[i]["id"]+ "ow")["slider"]("value")!= 100&& sovVal!= 4) {
          $("#"+ sectors[i]["id"]+ "inc")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "cor")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "imp")["slider"]("enable");
          $("#"+ sectors[i]["id"]+ "exp")["slider"]("enable")
        }
      };
      if($("#"+ sectors[i]["id"]+ "cor")["slider"]("values",0)== 100&& $("#"+ sectors[i]["id"]+ "cor")["slider"]("values",1)== 100) {
        $("#"+ sectors[i]["id"]+ "exp")["slider"]("disable")
      }else  {
        if($("#"+ sectors[i]["id"]+ "ow")["slider"]("value")!= 100&& $("#"+ sectors[i]["id"]+ "fun")["slider"]("value")!= 100&& sovVal!= 4) {
          $("#"+ sectors[i]["id"]+ "cor")["slider"]("enable")
        }
      }
    };
    if($("#reaow")["slider"]("value")== 100) {
      $("#reareg0")["slider"]("disable");
      $("#reareg1")["slider"]("disable");
      $("#reareg2")["slider"]("disable");
      $("#reareg3")["slider"]("disable");
      $("#reareg4")["slider"]("disable")
    }else  {
      if(sovVal!= 4) {
        $("#reareg0")["slider"]("enable");
        $("#reareg1")["slider"]("enable");
        $("#reareg2")["slider"]("enable");
        $("#reareg3")["slider"]("enable");
        $("#reareg4")["slider"]("enable")
      }
    };
    if($("#reaow")["slider"]("value")== 0) {
      $("#reacom1")["slider"]("disable");
      $("#reacom2")["slider"]("disable")
    }else  {
      if(sovVal!= 4) {
        $("#reacom1")["slider"]("enable");
        $("#reacom2")["slider"]("enable")
      }
    };
    var mifuVal=$("#mifu")["slider"]("value");
    var immanVal=$("#imman")["slider"]("value");
    var immstVal=$("#immst")["slider"]("value");
    var immwoVal=$("#immwo")["slider"]("value");
    var immasVal=$("#immas")["slider"]("value");
    var immrefVal=$("#immref")["slider"]("value");
    var reservVal=$("#reserv")["slider"]("value");
    var poverVal=$("#pover")["slider"]("value");
    var unempVal=$("#unemp")["slider"]("value");
    var pensVal=$("#pens")["slider"]("value");
    var minincVal=$("#mininc")["slider"]("value");
    var basincVal=$("#ubitype")["val"]()=== "3"? 0: $("#basinc")["slider"]("value");
    var wastVal=$("#wast")["slider"]("value");
    var pubpaVal=$("#pubpa")["slider"]("value");
    var conservVal=$("#conser")["slider"]("value");
    var solarVal=$("#solar")["slider"]("value");
    var nuclVal=$("#nucl")["slider"]("value");
    var inherMinVal=$("#inher")["slider"]("values",0);
    var inherMaxVal=$("#inher")["slider"]("values",1);
    var rndVal=$("#rnd")["slider"]("value");
    var gdpMultiplier=$("#gdpval")["slider"]("value");
    var eduGdpPct=$("#edugdp")["slider"]("value");
    var medGdpPct=$("#medgdp")["slider"]("value");
    var bankGdpPct=$("#bankgdp")["slider"]("value");
    var heaGdpPct=$("#heagdp")["slider"]("value");
    var retGdpPct=$("#retgdp")["slider"]("value");
    var manuGdpPct=$("#manugdp")["slider"]("value");
    var infrGdpPct=$("#infrgdp")["slider"]("value");
    var agrGdpPct=$("#agrgdp")["slider"]("value");
    var reaGdpPct=$("#reagdp")["slider"]("value");
    var natGdpPct=$("#natgdp")["slider"]("value");
    sectors[0]["sectgdpprc"]= $("#edugdp")["slider"]("value");
    sectors[1]["sectgdpprc"]= $("#medgdp")["slider"]("value");
    sectors[2]["sectgdpprc"]= $("#bankgdp")["slider"]("value");
    sectors[3]["sectgdpprc"]= $("#heagdp")["slider"]("value");
    sectors[4]["sectgdpprc"]= $("#retgdp")["slider"]("value");
    sectors[5]["sectgdpprc"]= $("#manugdp")["slider"]("value");
    sectors[6]["sectgdpprc"]= $("#infrgdp")["slider"]("value");
    sectors[7]["sectgdpprc"]= $("#agrgdp")["slider"]("value");
    sectors[8]["sectgdpprc"]= $("#natgdp")["slider"]("value");
    sectors[9]["sectgdpprc"]= $("#reagdp")["slider"]("value");
    sectors[0]["ownz"]= $("#eduow")["slider"]("value");
    sectors[0]["funz"]= $("#edufun")["slider"]("value");
    sectors[0]["incz"]= $("#eduinc")["slider"]("values",0);
    sectors[0]["incz2"]= $("#eduinc")["slider"]("values",1);
    sectors[0]["corz"]= $("#educor")["slider"]("values",0);
    sectors[0]["corz2"]= $("#educor")["slider"]("values",1);
    sectors[0]["consz"]= $("#educons")["slider"]("value");
    sectors[0]["impz"]= $("#eduimp")["slider"]("value");
    sectors[0]["expz"]= $("#eduexp")["slider"]("value");
    sectors[1]["ownz"]= $("#medow")["slider"]("value");
    sectors[1]["funz"]= $("#medfun")["slider"]("value");
    sectors[1]["incz"]= $("#medinc")["slider"]("values",0);
    sectors[1]["incz2"]= $("#medinc")["slider"]("values",1);
    sectors[1]["corz"]= $("#medcor")["slider"]("values",0);
    sectors[1]["corz2"]= $("#medcor")["slider"]("values",1);
    sectors[1]["consz"]= $("#medcons")["slider"]("value");
    sectors[1]["impz"]= $("#medimp")["slider"]("value");
    sectors[1]["expz"]= $("#medexp")["slider"]("value");
    sectors[2]["ownz"]= $("#bankow")["slider"]("value");
    sectors[2]["funz"]= $("#bankfun")["slider"]("value");
    sectors[2]["incz"]= $("#bankinc")["slider"]("values",0);
    sectors[2]["incz2"]= $("#bankinc")["slider"]("values",1);
    sectors[2]["corz"]= $("#bankcor")["slider"]("values",0);
    sectors[2]["corz2"]= $("#bankcor")["slider"]("values",1);
    sectors[2]["consz"]= $("#bankcons")["slider"]("value");
    sectors[2]["impz"]= $("#bankimp")["slider"]("value");
    sectors[2]["expz"]= $("#bankexp")["slider"]("value");
    sectors[3]["ownz"]= $("#heaow")["slider"]("value");
    sectors[3]["funz"]= $("#heafun")["slider"]("value");
    sectors[3]["incz"]= $("#heainc")["slider"]("values",0);
    sectors[3]["incz2"]= $("#heainc")["slider"]("values",1);
    sectors[3]["corz"]= $("#heacor")["slider"]("values",0);
    sectors[3]["corz2"]= $("#heacor")["slider"]("values",1);
    sectors[3]["consz"]= $("#heacons")["slider"]("value");
    sectors[3]["impz"]= $("#heaimp")["slider"]("value");
    sectors[3]["expz"]= $("#heaexp")["slider"]("value");
    sectors[4]["ownz"]= $("#retow")["slider"]("value");
    sectors[4]["funz"]= $("#retfun")["slider"]("value");
    sectors[4]["incz"]= $("#retinc")["slider"]("values",0);
    sectors[4]["incz2"]= $("#retinc")["slider"]("values",1);
    sectors[4]["corz"]= $("#retcor")["slider"]("values",0);
    sectors[4]["corz2"]= $("#retcor")["slider"]("values",1);
    sectors[4]["consz"]= $("#retcons")["slider"]("value");
    sectors[4]["impz"]= $("#retimp")["slider"]("value");
    sectors[4]["expz"]= $("#retexp")["slider"]("value");
    sectors[5]["ownz"]= $("#manuow")["slider"]("value");
    sectors[5]["funz"]= $("#manufun")["slider"]("value");
    sectors[5]["incz"]= $("#manuinc")["slider"]("values",0);
    sectors[5]["incz2"]= $("#manuinc")["slider"]("values",1);
    sectors[5]["corz"]= $("#manucor")["slider"]("values",0);
    sectors[5]["corz2"]= $("#manucor")["slider"]("values",1);
    sectors[5]["consz"]= $("#manucons")["slider"]("value");
    sectors[5]["impz"]= $("#manuimp")["slider"]("value");
    sectors[5]["expz"]= $("#manuexp")["slider"]("value");
    sectors[6]["ownz"]= $("#infrow")["slider"]("value");
    sectors[6]["funz"]= $("#infrfun")["slider"]("value");
    sectors[6]["incz"]= $("#infrinc")["slider"]("values",0);
    sectors[6]["incz2"]= $("#infrinc")["slider"]("values",1);
    sectors[6]["corz"]= $("#infrcor")["slider"]("values",0);
    sectors[6]["corz2"]= $("#infrcor")["slider"]("values",1);
    sectors[6]["consz"]= $("#infrcons")["slider"]("value");
    sectors[6]["impz"]= $("#infrimp")["slider"]("value");
    sectors[6]["expz"]= $("#infrexp")["slider"]("value");
    sectors[7]["ownz"]= $("#agrow")["slider"]("value");
    sectors[7]["funz"]= $("#agrfun")["slider"]("value");
    sectors[7]["incz"]= $("#agrinc")["slider"]("values",0);
    sectors[7]["incz2"]= $("#agrinc")["slider"]("values",1);
    sectors[7]["corz"]= $("#agrcor")["slider"]("values",0);
    sectors[7]["corz2"]= $("#agrcor")["slider"]("values",1);
    sectors[7]["consz"]= $("#agrcons")["slider"]("value");
    sectors[7]["impz"]= $("#agrimp")["slider"]("value");
    sectors[7]["expz"]= $("#agrexp")["slider"]("value");
    sectors[8]["ownz"]= $("#natow")["slider"]("value");
    sectors[8]["funz"]= $("#natfun")["slider"]("value");
    sectors[8]["incz"]= $("#natinc")["slider"]("values",0);
    sectors[8]["incz2"]= $("#natinc")["slider"]("values",1);
    sectors[8]["corz"]= $("#natcor")["slider"]("values",0);
    sectors[8]["corz2"]= $("#natcor")["slider"]("values",1);
    sectors[8]["consz"]= $("#natcons")["slider"]("value");
    sectors[8]["impz"]= $("#natimp")["slider"]("value");
    sectors[8]["expz"]= $("#natexp")["slider"]("value");
    var reaOwVal=$("#reaow")["slider"]("value");
    var reaSubsidyVal=$("#reareg0")["slider"]("value");
    var reaLandTaxVal=$("#reareg1")["slider"]("value");
    var reaPropTaxVal=$("#reareg2")["slider"]("value");
    var reaRentTaxVal=$("#reareg3")["slider"]("value");
    var reaSalesTaxVal=$("#reareg4")["slider"]("value");
    var reaSellPriceVal=$("#reacom1")["slider"]("value");
    var reaRentPriceVal=$("#reacom2")["slider"]("value");
    sectors[0]["prcx"]= $("#eduprc")["slider"]("value");
    sectors[1]["prcx"]= $("#medprc")["slider"]("value");
    sectors[2]["prcx"]= $("#bankprc")["slider"]("value");
    sectors[3]["prcx"]= $("#heaprc")["slider"]("value");
    sectors[4]["prcx"]= $("#retprc")["slider"]("value");
    sectors[5]["prcx"]= $("#manuprc")["slider"]("value");
    sectors[6]["prcx"]= $("#infrprc")["slider"]("value");
    sectors[7]["prcx"]= $("#agrprc")["slider"]("value");
    sectors[8]["prcx"]= $("#natprc")["slider"]("value");
    sectors[0]["wagx"]= $("#eduwag")["slider"]("value");
    sectors[1]["wagx"]= $("#medwag")["slider"]("value");
    sectors[2]["wagx"]= $("#bankwag")["slider"]("value");
    sectors[3]["wagx"]= $("#heawag")["slider"]("value");
    sectors[4]["wagx"]= $("#retwag")["slider"]("value");
    sectors[5]["wagx"]= $("#manuwag")["slider"]("value");
    sectors[6]["wagx"]= $("#infrwag")["slider"]("value");
    sectors[7]["wagx"]= $("#agrwag")["slider"]("value");
    sectors[8]["wagx"]= $("#natwag")["slider"]("value");
    sectors[0]["wagrx"]= $("#eduwagr")["slider"]("value");
    sectors[1]["wagrx"]= $("#medwagr")["slider"]("value");
    sectors[2]["wagrx"]= $("#bankwagr")["slider"]("value");
    sectors[3]["wagrx"]= $("#heawagr")["slider"]("value");
    sectors[4]["wagrx"]= $("#retwagr")["slider"]("value");
    sectors[5]["wagrx"]= $("#manuwagr")["slider"]("value");
    sectors[6]["wagrx"]= $("#infrwagr")["slider"]("value");
    sectors[7]["wagrx"]= $("#agrwagr")["slider"]("value");
    sectors[8]["wagrx"]= $("#natwagr")["slider"]("value");
    var allOwVal=$("#allsow")["slider"]("value");
    var allFunVal=$("#allsfun")["slider"]("value");
    var allIncMin=$("#allsinc")["slider"]("values",0);
    var allIncMax=$("#allsinc")["slider"]("values",1);
    var allCorMin=$("#allscor")["slider"]("values",0);
    var allCorMax=$("#allscor")["slider"]("values",1);
    var allConsVal=$("#allscons")["slider"]("value");
    var allImpVal=$("#allsimp")["slider"]("value");
    var allExpVal=$("#allsexp")["slider"]("value");
    var sovVal=$("#sov")["val"]();
    var sovOwVal=$("#sovow")["val"]();
    var autoVal=$("#auto")["val"]();
    var govgVal=$("#govg")["val"]();
    var govcVal=$("#govc")["val"]();
    var syseVal=$("#syse")["val"]();
    var syslVal=$("#sysl")["val"]();
    var sysjVal=$("#sysj")["val"]();
    var relVal=$("#rel")["val"]();
    var forPolVal=$("#for")["val"]();
    var conscrVal=$("#cons")["val"]();
    var righVal=$("#righ")["val"]();
    var minwVal=$("#minw")["val"]();
    var minw2Val=$("#minw2")["val"]();
    var pensregVal=$("#pensreg")["val"]();
    var centowVal=$("#centow")["val"]();
    var murdVal=$("#murd")["val"]();
    var rapeVal=$("#rape")["val"]();
    var stealVal=$("#steal")["val"]();
    var childVal=$("#child")["val"]();
    var defaVal=$("#defa")["val"]();
    var incitVal=$("#incit")["val"]();
    var prostVal=$("#stprost")["val"]();
    var brothVal=$("#broth")["val"]();
    var escoVal=$("#esco")["val"]();
    var handVal=$("#hand")["val"]();
    var shotVal=$("#shot")["val"]();
    var rifleVal=$("#rifle")["val"]();
    var casinVal=$("#casin")["val"]();
    var oncasinVal=$("#oncasin")["val"]();
    var sportsVal=$("#sports")["val"]();
    var homogenVal=$("#homogen")["val"]();
    var homoadVal=$("#homoad")["val"]();
    var transgenVal=$("#transgen")["val"]();
    var transadVal=$("#transad")["val"]();
    var tobusVal=$("#tobus")["val"]();
    var tobselVal=$("#tobsel")["val"]();
    var alcusVal=$("#alcus")["val"]();
    var alcselVal=$("#alcsel")["val"]();
    var canusVal=$("#canus")["val"]();
    var canselVal=$("#cansel")["val"]();
    var psyusVal=$("#psyus")["val"]();
    var psyselVal=$("#psysel")["val"]();
    var stiusVal=$("#stius")["val"]();
    var stiselVal=$("#stisel")["val"]();
    var opiusVal=$("#opius")["val"]();
    var opiselVal=$("#opisel")["val"]();
    var euthVal=$("#euth")["val"]();
    var obscVal=$("#obsc")["val"]();
    var warcVal=$("#warc")["val"]();
    var corfVal=$("#corf")["val"]();
    var blasphVal=$("#blasph")["val"]();
    var treasVal=$("#treas")["val"]();
    var embeVal=$("#embe")["val"]();
    var misceVal=$("#misce")["val"]();
    var disseVal=$("#disse")["val"]();
    var survVal=$("#surv")["val"]();
    var datapVal=$("#datap")["val"]();
    var encryVal=$("#encry")["val"]();
    var unionVal=$("#union")["val"]();
    var childlabVal=$("#childlab")["val"]();
    var ippropVal=$("#ipprop")["val"]();
    var trialVal=$("#trial")["val"]();
    var prisonVal=$("#prison")["val"]();
    var poloverVal=$("#polover")["val"]();
    var lotteryVal=$("#lottery")["val"]();
    var cryptogambVal=$("#cryptogamb")["val"]();
    var autoweapVal=$("#autoweap")["val"]();
    var explosVal=$("#explos")["val"]();
    var concealVal=$("#conceal")["val"]();
    var onprostVal=$("#onprost")["val"]();
    var surrogVal=$("#surrog")["val"]();
    var cyberVal=$("#cyber")["val"]();
    var hatecrVal=$("#hatecr")["val"]();
    var corruptVal=$("#corrupt")["val"]();
    var gestlimVal=$("#gestlim")["val"]();
    var abortwaitVal=$("#abortwait")["val"]();
    var abortfundVal=$("#abortfund")["val"]();
    var lootboxVal=$("#lootbox")["val"]();
    var childgambVal=$("#childgamb")["val"]();
    var compulsedVal=$("#compulsed")["val"]();
    var religedVal=$("#religed")["val"]();
    var homeschoolVal=$("#homeschool")["val"]();
    var sexedVal=$("#sexed")["val"]();
    var curriculumVal=$("#curriculum")["val"]();
    var healthsysVal=$("#healthsys")["val"]();
    var mentalhVal=$("#mentalh")["val"]();
    var vaccVal=$("#vacc")["val"]();
    var marriageVal=$("#marriage")["val"]();
    var divorceVal=$("#divorce")["val"]();
    var polygamyVal=$("#polygamy")["val"]();
    var ageconsentVal=$("#ageconsent")["val"]();
    var paramilitaryVal=parseInt($("#paramilitary")["val"]())|| 0;
    var moralpoliceVal=parseInt($("#moralpolice")["val"]())|| 0;
    var moralscopeVal=parseInt($("#moralscope")["val"]())|| 0;
    var moralpenaltyVal=parseInt($("#moralpenalty")["val"]())|| 0;
    var pressfVal=$("#pressf")["val"]();
    var assemblyVal=$("#assembly")["val"]();
    var censorVal=$("#censor")["val"]();
    var slaveryVal=$("#slavery")["val"]();
    var citizenVal=$("#citizen")["val"]();
    var citizenpathVal=$("#citizenpath")["val"]();
    var deathpenVal=$("#deathpen")["val"]();
    var socreditVal=$("#socredit")["val"]();
    var housingVal=$("#housing")["val"]();
    var landowVal=$("#landow")["val"]();
    var eminentVal=$("#eminent")["val"]();
    var homelessVal=$("#homeless")["val"]();
    var carbpolVal=$("#carbpol")["val"]();
    var nucpolVal=$("#nucpol")["val"]();
    var animalVal=$("#animal")["val"]();
    var gmoVal=$("#gmo")["val"]();
    var waterVal=$("#water")["val"]();
    var statemediaVal=$("#statemedia")["val"]();
    var langpolVal=$("#langpol")["val"]();
    var artscultVal=$("#artscult")["slider"]("value");
    var hatespeechVal=$("#hatespeech")["val"]();
    var transitVal=$("#transit")["val"]();
    var roadsVal=$("#roads")["val"]();
    var autodriveVal=$("#autodrive")["val"]();
    var spaceVal=$("#space")["val"]();
    var cryptoVal=$("#crypto")["val"]();
    var bankruptVal=$("#bankrupt")["val"]();
    var ubitypeVal=$("#ubitype")["val"]();
    var wtRateIdx=$("#wealthtax")["slider"]("value");
    var wtRatePct=[0,0.5,1,2,5,10,15,25][wtRateIdx];
    var wealthtaxVal=wtRateIdx;
    var wtThreshVal=$("#wealthtaxthresh")["slider"]("value");
    var wtWealthBase=[0.20,0.60,1.00,1.40,2.00,2.60][wtThreshVal];
    var wtBaseCompliance=[0,0.95,0.90,0.75,0.45,0.20,0.10,0.05][wtRateIdx];
    var wtThreshBreadth=[0.05,0.15,0.35,0.5,0.7,1.0][wtThreshVal];
    var statebankVal=$("#statebank")["val"]();
    var airegulVal=$("#airegul")["val"]();
    var cloningVal=$("#cloning")["val"]();
    var stemcellVal=$("#stemcell")["val"]();
    var geneditVal=$("#genedit")["val"]();
    var dataownVal=$("#dataown")["val"]();
    var taxloopVal=$("#taxloop")["val"]();
    var taxenforceVal=parseInt($("#taxenforce")["val"]())|| 0;
    var wtLoopholeMult=[0.45,0.55,0.80,0.90,0.95,1.0,1.0,0.95,0.25][taxloopVal];
    var enforceLeverage=[2.0,1.8,1.4,1.2,1.0,0.7,0.5,0.3,0.1][taxloopVal];
    var wtSquadBase=[1.0,1.15,1.3,1.5,1.8,2.2,3.0][taxenforceVal];
    var wtSquadBoost=1.0+(wtSquadBase- 1.0)* (enforceLeverage|| 1.0);
    var wtSquadGdpDrag=[0,0.005,0.01,0.02,0.04,0.07,0.12][taxenforceVal];
    var wtThreshCompliance=[1.0,0.95,0.88,0.80,0.70,0.55][wtThreshVal];
    var wtCompliance=Math.min(0.98,wtBaseCompliance* wtLoopholeMult* wtSquadBoost* wtThreshCompliance);
    var wtCompliancePct=wtRateIdx=== 0? -1: Math.round(wtCompliance* 100);
    var inherMinRate=inherMinVal/ 100;
    var inherTopRate=inherMaxVal/ 100;
    var inherEffRate=inherMinRate* 0.65+ inherTopRate* 0.35;
    var inherBaseCompl=inherEffRate> 0? Math.max(0,1.0- 1.0* inherEffRate- 0.35* Math.pow(inherEffRate,2)): 1.0;
    var inherCompliance=Math.min(0.98,inherBaseCompl* wtLoopholeMult* wtSquadBoost);
    var inherCompliancePct=inherEffRate> 0? Math.round(inherCompliance* 100): -1;
    $("#wtcompslider")["slider"]("value",wtCompliancePct< 0? 0: wtCompliancePct);
    $(".wtcomplabel")["html"](wtCompliancePct< 0? "Wealth Tax Compliance: \u2014": "Wealth Tax Compliance: "+ wtCompliancePct+ "%");
    $("#inhcompslider")["slider"]("value",inherCompliancePct< 0? 0: inherCompliancePct);
    $(".inhcomplabel")["html"](inherCompliancePct< 0? "Inheritance Compliance: \u2014": "Inheritance Compliance: "+ inherCompliancePct+ "%");
    var votrVal=$("#votr")["val"]()|| [];
    var entreqVal=$("#entreq")["val"]()|| [];
    var envregVal=$("#envreg")["val"]()|| [];
    var womrigVal=$("#womrig")["val"]()|| [];
    var centfunVal=$("#centfun")["val"]()|| [];
    var abortVal=$("#abort")["val"]()|| [];
    var fabortVal=$("#fabort")["val"]()|| [];
    var immTotalPct=immstVal+ immwoVal+ immasVal+ immrefVal;
    if(immTotalPct== 0) {
      var immTotalPct=1
    };
    $("#immst")["slider"]("value",immstVal* 100/ immTotalPct);
    $("#immwo")["slider"]("value",immwoVal* 100/ immTotalPct);
    $("#immas")["slider"]("value",immasVal* 100/ immTotalPct);
    $("#immref")["slider"]("value",immrefVal* 100/ immTotalPct);
    $(".immst")["html"]("Students: "+ Math["round"](immstVal* 100/ immTotalPct)["toFixed"](0)+ "%");
    $(".immwo")["html"]("Workers: "+ Math["round"](immwoVal* 100/ immTotalPct)["toFixed"](0)+ "%");
    $(".immas")["html"]("Asylees: "+ Math["round"](immasVal* 100/ immTotalPct)["toFixed"](0)+ "%");
    $(".immref")["html"]("Refugees: "+ Math["round"](immrefVal* 100/ immTotalPct)["toFixed"](0)+ "%");
    var immDivisor1=4;
    var immBase1=0;
    if(immanVal== 2.5) {
      var immDivisor1=2.5
    }else  {
      if(immanVal== 0) {
        var immBase1=spectrumWeightsX[0]["imman"]
      }
    };
    var xImmScore=immBase1+ ((immanVal/ immDivisor1)* spectrumWeightsX[2]["imman"])* ((immstVal/ 100)* spectrumWeightsX[2]["immst"]+ (immwoVal/ 100)* spectrumWeightsX[2]["immwo"]+ (immasVal/ 100)* spectrumWeightsX[2]["immas"]+ (immrefVal/ 100)* spectrumWeightsX[2]["immref"]);
    spectrumWeightsX[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeightsX[7]["votr"]= spectrumWeightsX[7]["votr"]+  +spectrumWeightsX[votrVal[i]]["votr"]
      }
    };
    spectrumWeightsX[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeightsX[7]["entreq"]= spectrumWeightsX[7]["entreq"]+  +spectrumWeightsX[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeightsX[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeightsX[7]["envreg"]= spectrumWeightsX[7]["envreg"]+  +spectrumWeightsX[envregVal[i]]["envreg"]
      }
    };
    spectrumWeightsX[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeightsX[7]["womrig"]= spectrumWeightsX[7]["womrig"]+  +spectrumWeightsX[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeightsX[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeightsX[7]["centfun"]= spectrumWeightsX[7]["centfun"]+  +spectrumWeightsX[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeightsX[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeightsX[7]["abort"]= spectrumWeightsX[7]["abort"]+  +spectrumWeightsX[abortVal[i]]["abort"]
      }
    };
    spectrumWeightsX[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeightsX[7]["fabort"]= spectrumWeightsX[7]["fabort"]+  +spectrumWeightsX[fabortVal[i]]["fabort"]
      }
    };
    var xAxisTotal=xImmScore+ spectrumWeightsX[sovVal]["sov"]+ spectrumWeightsX[autoVal]["auto"]+ spectrumWeightsX[govgVal]["govg"]+ spectrumWeightsX[govcVal]["govc"]+ spectrumWeightsX[syseVal]["syse"]+ spectrumWeightsX[syslVal]["sysl"]+ spectrumWeightsX[sysjVal]["sysj"]+ spectrumWeightsX[relVal]["rel"]+ spectrumWeightsX[forPolVal]["for"]+ spectrumWeightsX[conscrVal]["cons"]+ spectrumWeightsX[righVal]["righ"]+ spectrumWeightsX[minwVal]["minw"]+ spectrumWeightsX[minw2Val]["minw2"]+ spectrumWeightsX[pensregVal]["pensreg"]+ spectrumWeightsX[centowVal]["centow"]+ spectrumWeightsX[murdVal]["murd"]+ spectrumWeightsX[rapeVal]["rape"]+ spectrumWeightsX[stealVal]["steal"]+ spectrumWeightsX[childVal]["child"]+ spectrumWeightsX[defaVal]["defa"]+ spectrumWeightsX[incitVal]["incit"]+ spectrumWeightsX[prostVal]["stprost"]+ spectrumWeightsX[brothVal]["broth"]+ spectrumWeightsX[escoVal]["esco"]+ spectrumWeightsX[handVal]["hand"]+ spectrumWeightsX[shotVal]["shot"]+ spectrumWeightsX[rifleVal]["rifle"]+ spectrumWeightsX[casinVal]["casin"]+ spectrumWeightsX[oncasinVal]["oncasin"]+ spectrumWeightsX[sportsVal]["sports"]+ spectrumWeightsX[homogenVal]["homogen"]+ spectrumWeightsX[homoadVal]["homoad"]+ spectrumWeightsX[transgenVal]["transgen"]+ spectrumWeightsX[transadVal]["transad"]+ spectrumWeightsX[tobusVal]["tobus"]+ spectrumWeightsX[tobselVal]["tobsel"]+ spectrumWeightsX[alcusVal]["alcus"]+ spectrumWeightsX[alcselVal]["alcsel"]+ spectrumWeightsX[canusVal]["canus"]+ spectrumWeightsX[canselVal]["cansel"]+ spectrumWeightsX[psyusVal]["psyus"]+ spectrumWeightsX[psyselVal]["psysel"]+ spectrumWeightsX[stiusVal]["stius"]+ spectrumWeightsX[stiselVal]["stisel"]+ spectrumWeightsX[opiusVal]["opius"]+ spectrumWeightsX[opiselVal]["opisel"]+ spectrumWeightsX[euthVal]["euth"]+ spectrumWeightsX[obscVal]["obsc"]+ spectrumWeightsX[warcVal]["warc"]+ spectrumWeightsX[corfVal]["corf"]+ spectrumWeightsX[blasphVal]["blasph"]+ spectrumWeightsX[treasVal]["treas"]+ spectrumWeightsX[embeVal]["embe"]+ spectrumWeightsX[misceVal]["misce"]+ spectrumWeightsX[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeightsX[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeightsX[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeightsX[2]["inher"]+ (reservVal/ 100)* spectrumWeightsX[2]["reserv"]+ (poverVal/ 100)* spectrumWeightsX[2]["pover"]+ (unempVal/ 100)* spectrumWeightsX[2]["unemp"]+ (pensVal/ 100)* spectrumWeightsX[2]["pens"]+ (minincVal/ 100)* spectrumWeightsX[2]["mininc"]+ (basincVal/ 100)* spectrumWeightsX[2]["basinc"]+ (wastVal/ 100)* spectrumWeightsX[2]["wast"]+ (pubpaVal/ 100)* spectrumWeightsX[2]["pubpa"]+ (conservVal/ 100)* spectrumWeightsX[2]["conser"]+ (solarVal/ 100)* spectrumWeightsX[2]["solar"]+ (nuclVal/ 100)* spectrumWeightsX[2]["nucl"]+ (rndVal/ 100)* spectrumWeightsX[2]["rnd"]+ spectrumWeightsX[7]["votr"]+ spectrumWeightsX[7]["entreq"]+ spectrumWeightsX[7]["envreg"]+ spectrumWeightsX[7]["womrig"]+ spectrumWeightsX[7]["centfun"]+ spectrumWeightsX[7]["abort"]+ spectrumWeightsX[7]["fabort"] + (spectrumWeightsX[survVal] && spectrumWeightsX[survVal]["surv"] || 0) + (spectrumWeightsX[datapVal] && spectrumWeightsX[datapVal]["datap"] || 0) + (spectrumWeightsX[encryVal] && spectrumWeightsX[encryVal]["encry"] || 0) + (spectrumWeightsX[unionVal] && spectrumWeightsX[unionVal]["union"] || 0) + (spectrumWeightsX[childlabVal] && spectrumWeightsX[childlabVal]["childlab"] || 0) + (spectrumWeightsX[ippropVal] && spectrumWeightsX[ippropVal]["ipprop"] || 0) + (spectrumWeightsX[trialVal] && spectrumWeightsX[trialVal]["trial"] || 0) + (spectrumWeightsX[prisonVal] && spectrumWeightsX[prisonVal]["prison"] || 0) + (spectrumWeightsX[poloverVal] && spectrumWeightsX[poloverVal]["polover"] || 0) + (spectrumWeightsX[compulsedVal] && spectrumWeightsX[compulsedVal]["compulsed"] || 0) + (spectrumWeightsX[religedVal] && spectrumWeightsX[religedVal]["religed"] || 0) + (spectrumWeightsX[homeschoolVal] && spectrumWeightsX[homeschoolVal]["homeschool"] || 0) + (spectrumWeightsX[sexedVal] && spectrumWeightsX[sexedVal]["sexed"] || 0) + (spectrumWeightsX[curriculumVal] && spectrumWeightsX[curriculumVal]["curriculum"] || 0) + (spectrumWeightsX[healthsysVal] && spectrumWeightsX[healthsysVal]["healthsys"] || 0) + (spectrumWeightsX[mentalhVal] && spectrumWeightsX[mentalhVal]["mentalh"] || 0) + (spectrumWeightsX[vaccVal] && spectrumWeightsX[vaccVal]["vacc"] || 0) + (spectrumWeightsX[marriageVal] && spectrumWeightsX[marriageVal]["marriage"] || 0) + (spectrumWeightsX[divorceVal] && spectrumWeightsX[divorceVal]["divorce"] || 0) + (spectrumWeightsX[polygamyVal] && spectrumWeightsX[polygamyVal]["polygamy"] || 0) + (spectrumWeightsX[ageconsentVal] && spectrumWeightsX[ageconsentVal]["ageconsent"] || 0) + (spectrumWeightsX[pressfVal] && spectrumWeightsX[pressfVal]["pressf"] || 0) + (spectrumWeightsX[assemblyVal] && spectrumWeightsX[assemblyVal]["assembly"] || 0) + (spectrumWeightsX[censorVal] && spectrumWeightsX[censorVal]["censor"] || 0) + (spectrumWeightsX[slaveryVal] && spectrumWeightsX[slaveryVal]["slavery"] || 0) + (spectrumWeightsX[citizenVal] && spectrumWeightsX[citizenVal]["citizen"] || 0) + (spectrumWeightsX[deathpenVal] && spectrumWeightsX[deathpenVal]["deathpen"] || 0) + (spectrumWeightsX[socreditVal] && spectrumWeightsX[socreditVal]["socredit"] || 0) + (spectrumWeightsX[trialVal] && spectrumWeightsX[trialVal]["trial"] || 0) + (spectrumWeightsX[prisonVal] && spectrumWeightsX[prisonVal]["prison"] || 0) + (spectrumWeightsX[poloverVal] && spectrumWeightsX[poloverVal]["polover"] || 0) + (spectrumWeightsX[unionVal] && spectrumWeightsX[unionVal]["union"] || 0) + (spectrumWeightsX[childlabVal] && spectrumWeightsX[childlabVal]["childlab"] || 0) + (spectrumWeightsX[ippropVal] && spectrumWeightsX[ippropVal]["ipprop"] || 0) + (spectrumWeightsX[housingVal] && spectrumWeightsX[housingVal]["housing"] || 0) + (spectrumWeightsX[landowVal] && spectrumWeightsX[landowVal]["landow"] || 0) + (spectrumWeightsX[eminentVal] && spectrumWeightsX[eminentVal]["eminent"] || 0) + (spectrumWeightsX[homelessVal] && spectrumWeightsX[homelessVal]["homeless"] || 0) + (spectrumWeightsX[carbpolVal] && spectrumWeightsX[carbpolVal]["carbpol"] || 0) + (spectrumWeightsX[nucpolVal] && spectrumWeightsX[nucpolVal]["nucpol"] || 0) + (spectrumWeightsX[animalVal] && spectrumWeightsX[animalVal]["animal"] || 0) + (spectrumWeightsX[gmoVal] && spectrumWeightsX[gmoVal]["gmo"] || 0) + (spectrumWeightsX[waterVal] && spectrumWeightsX[waterVal]["water"] || 0) + (spectrumWeightsX[statemediaVal] && spectrumWeightsX[statemediaVal]["statemedia"] || 0) + (spectrumWeightsX[langpolVal] && spectrumWeightsX[langpolVal]["langpol"] || 0) + (artscultVal * 2) + (spectrumWeightsX[hatespeechVal] && spectrumWeightsX[hatespeechVal]["hatespeech"] || 0) + (spectrumWeightsX[transitVal] && spectrumWeightsX[transitVal]["transit"] || 0) + (spectrumWeightsX[roadsVal] && spectrumWeightsX[roadsVal]["roads"] || 0) + (spectrumWeightsX[autodriveVal] && spectrumWeightsX[autodriveVal]["autodrive"] || 0) + (spectrumWeightsX[spaceVal] && spectrumWeightsX[spaceVal]["space"] || 0) + (spectrumWeightsX[cryptoVal] && spectrumWeightsX[cryptoVal]["crypto"] || 0) + (spectrumWeightsX[bankruptVal] && spectrumWeightsX[bankruptVal]["bankrupt"] || 0) + (spectrumWeightsX[ubitypeVal] && spectrumWeightsX[ubitypeVal]["ubitype"] || 0) + (spectrumWeightsX[wealthtaxVal] && spectrumWeightsX[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeightsX[statebankVal] && spectrumWeightsX[statebankVal]["statebank"] || 0) + (spectrumWeightsX[airegulVal] && spectrumWeightsX[airegulVal]["airegul"] || 0) + (spectrumWeightsX[cloningVal] && spectrumWeightsX[cloningVal]["cloning"] || 0) + (spectrumWeightsX[stemcellVal] && spectrumWeightsX[stemcellVal]["stemcell"] || 0) + (spectrumWeightsX[geneditVal] && spectrumWeightsX[geneditVal]["genedit"] || 0) + (spectrumWeightsX[dataownVal] && spectrumWeightsX[dataownVal]["dataown"] || 0) + (spectrumWeightsX[taxloopVal] && spectrumWeightsX[taxloopVal]["taxloop"] || 0) + (spectrumWeightsX[citizenpathVal] && spectrumWeightsX[citizenpathVal]["citizenpath"] || 0)+ (spectrumWeightsX[paramilitaryVal] && spectrumWeightsX[paramilitaryVal]["paramilitary"] || 0)+ (spectrumWeightsX[moralpoliceVal] && spectrumWeightsX[moralpoliceVal]["moralpolice"] || 0)+ (spectrumWeightsX[moralscopeVal] && spectrumWeightsX[moralscopeVal]["moralscope"] || 0)+ (spectrumWeightsX[moralpenaltyVal] && spectrumWeightsX[moralpenaltyVal]["moralpenalty"] || 0);
    var yImmDivisor=4;
    var yImmBase=0;
    if(immanVal== 2.5) {
      var yImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var yImmBase=spectrumWeightsY[0]["imman"]
      }
    };
    var yImmScore=yImmBase+ ((immanVal/ yImmDivisor)* spectrumWeightsY[2]["imman"])* ((immstVal/ 100)* spectrumWeightsY[2]["immst"]+ (immwoVal/ 100)* spectrumWeightsY[2]["immwo"]+ (immasVal/ 100)* spectrumWeightsY[2]["immas"]+ (immrefVal/ 100)* spectrumWeightsY[2]["immref"]);
    spectrumWeightsY[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeightsY[7]["votr"]= spectrumWeightsY[7]["votr"]+  +spectrumWeightsY[votrVal[i]]["votr"]
      }
    };
    spectrumWeightsY[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeightsY[7]["entreq"]= spectrumWeightsY[7]["entreq"]+  +spectrumWeightsY[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeightsY[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeightsY[7]["envreg"]= spectrumWeightsY[7]["envreg"]+  +spectrumWeightsY[envregVal[i]]["envreg"]
      }
    };
    spectrumWeightsY[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeightsY[7]["womrig"]= spectrumWeightsY[7]["womrig"]+  +spectrumWeightsY[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeightsY[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeightsY[7]["centfun"]= spectrumWeightsY[7]["centfun"]+  +spectrumWeightsY[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeightsY[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeightsY[7]["abort"]= spectrumWeightsY[7]["abort"]+  +spectrumWeightsY[abortVal[i]]["abort"]
      }
    };
    spectrumWeightsY[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeightsY[7]["fabort"]= spectrumWeightsY[7]["fabort"]+  +spectrumWeightsY[fabortVal[i]]["fabort"]
      }
    };
    var yAxisTotal=yImmScore+ spectrumWeightsY[sovVal]["sov"]+ spectrumWeightsY[autoVal]["auto"]+ spectrumWeightsY[govgVal]["govg"]+ spectrumWeightsY[govcVal]["govc"]+ spectrumWeightsY[syseVal]["syse"]+ spectrumWeightsY[syslVal]["sysl"]+ spectrumWeightsY[sysjVal]["sysj"]+ spectrumWeightsY[relVal]["rel"]+ spectrumWeightsY[forPolVal]["for"]+ spectrumWeightsY[conscrVal]["cons"]+ spectrumWeightsY[righVal]["righ"]+ spectrumWeightsY[minwVal]["minw"]+ spectrumWeightsY[minw2Val]["minw2"]+ spectrumWeightsY[pensregVal]["pensreg"]+ spectrumWeightsY[centowVal]["centow"]+ spectrumWeightsY[murdVal]["murd"]+ spectrumWeightsY[rapeVal]["rape"]+ spectrumWeightsY[stealVal]["steal"]+ spectrumWeightsY[childVal]["child"]+ spectrumWeightsY[defaVal]["defa"]+ spectrumWeightsY[incitVal]["incit"]+ spectrumWeightsY[prostVal]["stprost"]+ spectrumWeightsY[brothVal]["broth"]+ spectrumWeightsY[escoVal]["esco"]+ spectrumWeightsY[handVal]["hand"]+ spectrumWeightsY[shotVal]["shot"]+ spectrumWeightsY[rifleVal]["rifle"]+ spectrumWeightsY[casinVal]["casin"]+ spectrumWeightsY[oncasinVal]["oncasin"]+ spectrumWeightsY[sportsVal]["sports"]+ spectrumWeightsY[homogenVal]["homogen"]+ spectrumWeightsY[homoadVal]["homoad"]+ spectrumWeightsY[transgenVal]["transgen"]+ spectrumWeightsY[transadVal]["transad"]+ spectrumWeightsY[tobusVal]["tobus"]+ spectrumWeightsY[tobselVal]["tobsel"]+ spectrumWeightsY[alcusVal]["alcus"]+ spectrumWeightsY[alcselVal]["alcsel"]+ spectrumWeightsY[canusVal]["canus"]+ spectrumWeightsY[canselVal]["cansel"]+ spectrumWeightsY[psyusVal]["psyus"]+ spectrumWeightsY[psyselVal]["psysel"]+ spectrumWeightsY[stiusVal]["stius"]+ spectrumWeightsY[stiselVal]["stisel"]+ spectrumWeightsY[opiusVal]["opius"]+ spectrumWeightsY[opiselVal]["opisel"]+ spectrumWeightsY[euthVal]["euth"]+ spectrumWeightsY[obscVal]["obsc"]+ spectrumWeightsY[warcVal]["warc"]+ spectrumWeightsY[corfVal]["corf"]+ spectrumWeightsY[blasphVal]["blasph"]+ spectrumWeightsY[treasVal]["treas"]+ spectrumWeightsY[embeVal]["embe"]+ spectrumWeightsY[misceVal]["misce"]+ spectrumWeightsY[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeightsY[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeightsY[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeightsY[2]["inher"]+ (reservVal/ 100)* spectrumWeightsY[2]["reserv"]+ (poverVal/ 100)* spectrumWeightsY[2]["pover"]+ (unempVal/ 100)* spectrumWeightsY[2]["unemp"]+ (pensVal/ 100)* spectrumWeightsY[2]["pens"]+ (minincVal/ 100)* spectrumWeightsY[2]["mininc"]+ (basincVal/ 100)* spectrumWeightsY[2]["basinc"]+ (wastVal/ 100)* spectrumWeightsY[2]["wast"]+ (pubpaVal/ 100)* spectrumWeightsY[2]["pubpa"]+ (conservVal/ 100)* spectrumWeightsY[2]["conser"]+ (solarVal/ 100)* spectrumWeightsY[2]["solar"]+ (nuclVal/ 100)* spectrumWeightsY[2]["nucl"]+ (rndVal/ 100)* spectrumWeightsY[2]["rnd"]+ spectrumWeightsY[7]["votr"]+ spectrumWeightsY[7]["entreq"]+ spectrumWeightsY[7]["envreg"]+ spectrumWeightsY[7]["womrig"]+ spectrumWeightsY[7]["centfun"]+ spectrumWeightsY[7]["abort"]+ spectrumWeightsY[7]["fabort"] + (spectrumWeightsY[survVal] && spectrumWeightsY[survVal]["surv"] || 0) + (spectrumWeightsY[datapVal] && spectrumWeightsY[datapVal]["datap"] || 0) + (spectrumWeightsY[encryVal] && spectrumWeightsY[encryVal]["encry"] || 0) + (spectrumWeightsY[unionVal] && spectrumWeightsY[unionVal]["union"] || 0) + (spectrumWeightsY[childlabVal] && spectrumWeightsY[childlabVal]["childlab"] || 0) + (spectrumWeightsY[ippropVal] && spectrumWeightsY[ippropVal]["ipprop"] || 0) + (spectrumWeightsY[trialVal] && spectrumWeightsY[trialVal]["trial"] || 0) + (spectrumWeightsY[prisonVal] && spectrumWeightsY[prisonVal]["prison"] || 0) + (spectrumWeightsY[poloverVal] && spectrumWeightsY[poloverVal]["polover"] || 0) + (spectrumWeightsY[compulsedVal] && spectrumWeightsY[compulsedVal]["compulsed"] || 0) + (spectrumWeightsY[religedVal] && spectrumWeightsY[religedVal]["religed"] || 0) + (spectrumWeightsY[homeschoolVal] && spectrumWeightsY[homeschoolVal]["homeschool"] || 0) + (spectrumWeightsY[sexedVal] && spectrumWeightsY[sexedVal]["sexed"] || 0) + (spectrumWeightsY[curriculumVal] && spectrumWeightsY[curriculumVal]["curriculum"] || 0) + (spectrumWeightsY[healthsysVal] && spectrumWeightsY[healthsysVal]["healthsys"] || 0) + (spectrumWeightsY[mentalhVal] && spectrumWeightsY[mentalhVal]["mentalh"] || 0) + (spectrumWeightsY[vaccVal] && spectrumWeightsY[vaccVal]["vacc"] || 0) + (spectrumWeightsY[marriageVal] && spectrumWeightsY[marriageVal]["marriage"] || 0) + (spectrumWeightsY[divorceVal] && spectrumWeightsY[divorceVal]["divorce"] || 0) + (spectrumWeightsY[polygamyVal] && spectrumWeightsY[polygamyVal]["polygamy"] || 0) + (spectrumWeightsY[ageconsentVal] && spectrumWeightsY[ageconsentVal]["ageconsent"] || 0) + (spectrumWeightsY[pressfVal] && spectrumWeightsY[pressfVal]["pressf"] || 0) + (spectrumWeightsY[assemblyVal] && spectrumWeightsY[assemblyVal]["assembly"] || 0) + (spectrumWeightsY[censorVal] && spectrumWeightsY[censorVal]["censor"] || 0) + (spectrumWeightsY[slaveryVal] && spectrumWeightsY[slaveryVal]["slavery"] || 0) + (spectrumWeightsY[citizenVal] && spectrumWeightsY[citizenVal]["citizen"] || 0) + (spectrumWeightsY[deathpenVal] && spectrumWeightsY[deathpenVal]["deathpen"] || 0) + (spectrumWeightsY[socreditVal] && spectrumWeightsY[socreditVal]["socredit"] || 0) + (spectrumWeightsY[trialVal] && spectrumWeightsY[trialVal]["trial"] || 0) + (spectrumWeightsY[prisonVal] && spectrumWeightsY[prisonVal]["prison"] || 0) + (spectrumWeightsY[poloverVal] && spectrumWeightsY[poloverVal]["polover"] || 0) + (spectrumWeightsY[unionVal] && spectrumWeightsY[unionVal]["union"] || 0) + (spectrumWeightsY[childlabVal] && spectrumWeightsY[childlabVal]["childlab"] || 0) + (spectrumWeightsY[ippropVal] && spectrumWeightsY[ippropVal]["ipprop"] || 0) + (spectrumWeightsY[housingVal] && spectrumWeightsY[housingVal]["housing"] || 0) + (spectrumWeightsY[landowVal] && spectrumWeightsY[landowVal]["landow"] || 0) + (spectrumWeightsY[eminentVal] && spectrumWeightsY[eminentVal]["eminent"] || 0) + (spectrumWeightsY[homelessVal] && spectrumWeightsY[homelessVal]["homeless"] || 0) + (spectrumWeightsY[carbpolVal] && spectrumWeightsY[carbpolVal]["carbpol"] || 0) + (spectrumWeightsY[nucpolVal] && spectrumWeightsY[nucpolVal]["nucpol"] || 0) + (spectrumWeightsY[animalVal] && spectrumWeightsY[animalVal]["animal"] || 0) + (spectrumWeightsY[gmoVal] && spectrumWeightsY[gmoVal]["gmo"] || 0) + (spectrumWeightsY[waterVal] && spectrumWeightsY[waterVal]["water"] || 0) + (spectrumWeightsY[statemediaVal] && spectrumWeightsY[statemediaVal]["statemedia"] || 0) + (spectrumWeightsY[langpolVal] && spectrumWeightsY[langpolVal]["langpol"] || 0) + (artscultVal * -1.5) + (spectrumWeightsY[hatespeechVal] && spectrumWeightsY[hatespeechVal]["hatespeech"] || 0) + (spectrumWeightsY[transitVal] && spectrumWeightsY[transitVal]["transit"] || 0) + (spectrumWeightsY[roadsVal] && spectrumWeightsY[roadsVal]["roads"] || 0) + (spectrumWeightsY[autodriveVal] && spectrumWeightsY[autodriveVal]["autodrive"] || 0) + (spectrumWeightsY[spaceVal] && spectrumWeightsY[spaceVal]["space"] || 0) + (spectrumWeightsY[cryptoVal] && spectrumWeightsY[cryptoVal]["crypto"] || 0) + (spectrumWeightsY[bankruptVal] && spectrumWeightsY[bankruptVal]["bankrupt"] || 0) + (spectrumWeightsY[ubitypeVal] && spectrumWeightsY[ubitypeVal]["ubitype"] || 0) + (spectrumWeightsY[wealthtaxVal] && spectrumWeightsY[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeightsY[statebankVal] && spectrumWeightsY[statebankVal]["statebank"] || 0) + (spectrumWeightsY[airegulVal] && spectrumWeightsY[airegulVal]["airegul"] || 0) + (spectrumWeightsY[cloningVal] && spectrumWeightsY[cloningVal]["cloning"] || 0) + (spectrumWeightsY[stemcellVal] && spectrumWeightsY[stemcellVal]["stemcell"] || 0) + (spectrumWeightsY[geneditVal] && spectrumWeightsY[geneditVal]["genedit"] || 0) + (spectrumWeightsY[dataownVal] && spectrumWeightsY[dataownVal]["dataown"] || 0) + (spectrumWeightsY[taxloopVal] && spectrumWeightsY[taxloopVal]["taxloop"] || 0) + (spectrumWeightsY[citizenpathVal] && spectrumWeightsY[citizenpathVal]["citizenpath"] || 0)+ (spectrumWeightsY[paramilitaryVal] && spectrumWeightsY[paramilitaryVal]["paramilitary"] || 0)+ (spectrumWeightsY[moralpoliceVal] && spectrumWeightsY[moralpoliceVal]["moralpolice"] || 0)+ (spectrumWeightsY[moralscopeVal] && spectrumWeightsY[moralscopeVal]["moralscope"] || 0)+ (spectrumWeightsY[moralpenaltyVal] && spectrumWeightsY[moralpenaltyVal]["moralpenalty"] || 0);
    var ax3ImmDivisor=4;
    var ax3ImmBase=0;
    if(immanVal== 2.5) {
      var ax3ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax3ImmBase=spectrumWeights3[0]["imman"]
      }
    };
    var ax3ImmScore=ax3ImmBase+ ((immanVal/ ax3ImmDivisor)* spectrumWeights3[2]["imman"])* ((immstVal/ 100)* spectrumWeights3[2]["immst"]+ (immwoVal/ 100)* spectrumWeights3[2]["immwo"]+ (immasVal/ 100)* spectrumWeights3[2]["immas"]+ (immrefVal/ 100)* spectrumWeights3[2]["immref"]);
    spectrumWeights3[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights3[7]["votr"]= spectrumWeights3[7]["votr"]+  +spectrumWeights3[votrVal[i]]["votr"]
      }
    };
    spectrumWeights3[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights3[7]["entreq"]= spectrumWeights3[7]["entreq"]+  +spectrumWeights3[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights3[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights3[7]["envreg"]= spectrumWeights3[7]["envreg"]+  +spectrumWeights3[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights3[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights3[7]["womrig"]= spectrumWeights3[7]["womrig"]+  +spectrumWeights3[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights3[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights3[7]["centfun"]= spectrumWeights3[7]["centfun"]+  +spectrumWeights3[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights3[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights3[7]["abort"]= spectrumWeights3[7]["abort"]+  +spectrumWeights3[abortVal[i]]["abort"]
      }
    };
    spectrumWeights3[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights3[7]["fabort"]= spectrumWeights3[7]["fabort"]+  +spectrumWeights3[fabortVal[i]]["fabort"]
      }
    };
    var ax3Total=ax3ImmScore+ spectrumWeights3[sovVal]["sov"]+ spectrumWeights3[autoVal]["auto"]+ spectrumWeights3[govgVal]["govg"]+ spectrumWeights3[govcVal]["govc"]+ spectrumWeights3[syseVal]["syse"]+ spectrumWeights3[syslVal]["sysl"]+ spectrumWeights3[sysjVal]["sysj"]+ spectrumWeights3[relVal]["rel"]+ spectrumWeights3[forPolVal]["for"]+ spectrumWeights3[conscrVal]["cons"]+ spectrumWeights3[righVal]["righ"]+ spectrumWeights3[minwVal]["minw"]+ spectrumWeights3[minw2Val]["minw2"]+ spectrumWeights3[pensregVal]["pensreg"]+ spectrumWeights3[centowVal]["centow"]+ spectrumWeights3[murdVal]["murd"]+ spectrumWeights3[rapeVal]["rape"]+ spectrumWeights3[stealVal]["steal"]+ spectrumWeights3[childVal]["child"]+ spectrumWeights3[defaVal]["defa"]+ spectrumWeights3[incitVal]["incit"]+ spectrumWeights3[prostVal]["stprost"]+ spectrumWeights3[brothVal]["broth"]+ spectrumWeights3[escoVal]["esco"]+ spectrumWeights3[handVal]["hand"]+ spectrumWeights3[shotVal]["shot"]+ spectrumWeights3[rifleVal]["rifle"]+ spectrumWeights3[casinVal]["casin"]+ spectrumWeights3[oncasinVal]["oncasin"]+ spectrumWeights3[sportsVal]["sports"]+ spectrumWeights3[homogenVal]["homogen"]+ spectrumWeights3[homoadVal]["homoad"]+ spectrumWeights3[transgenVal]["transgen"]+ spectrumWeights3[transadVal]["transad"]+ spectrumWeights3[tobusVal]["tobus"]+ spectrumWeights3[tobselVal]["tobsel"]+ spectrumWeights3[alcusVal]["alcus"]+ spectrumWeights3[alcselVal]["alcsel"]+ spectrumWeights3[canusVal]["canus"]+ spectrumWeights3[canselVal]["cansel"]+ spectrumWeights3[psyusVal]["psyus"]+ spectrumWeights3[psyselVal]["psysel"]+ spectrumWeights3[stiusVal]["stius"]+ spectrumWeights3[stiselVal]["stisel"]+ spectrumWeights3[opiusVal]["opius"]+ spectrumWeights3[opiselVal]["opisel"]+ spectrumWeights3[euthVal]["euth"]+ spectrumWeights3[obscVal]["obsc"]+ spectrumWeights3[warcVal]["warc"]+ spectrumWeights3[corfVal]["corf"]+ spectrumWeights3[blasphVal]["blasph"]+ spectrumWeights3[treasVal]["treas"]+ spectrumWeights3[embeVal]["embe"]+ spectrumWeights3[misceVal]["misce"]+ spectrumWeights3[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights3[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights3[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights3[2]["inher"]+ (reservVal/ 100)* spectrumWeights3[2]["reserv"]+ (poverVal/ 100)* spectrumWeights3[2]["pover"]+ (unempVal/ 100)* spectrumWeights3[2]["unemp"]+ (pensVal/ 100)* spectrumWeights3[2]["pens"]+ (minincVal/ 100)* spectrumWeights3[2]["mininc"]+ (basincVal/ 100)* spectrumWeights3[2]["basinc"]+ (wastVal/ 100)* spectrumWeights3[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights3[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights3[2]["conser"]+ (solarVal/ 100)* spectrumWeights3[2]["solar"]+ (nuclVal/ 100)* spectrumWeights3[2]["nucl"]+ (rndVal/ 100)* spectrumWeights3[2]["rnd"]+ spectrumWeights3[7]["votr"]+ spectrumWeights3[7]["entreq"]+ spectrumWeights3[7]["envreg"]+ spectrumWeights3[7]["womrig"]+ spectrumWeights3[7]["centfun"]+ spectrumWeights3[7]["abort"]+ spectrumWeights3[7]["fabort"] + (spectrumWeights3[survVal] && spectrumWeights3[survVal]["surv"] || 0) + (spectrumWeights3[datapVal] && spectrumWeights3[datapVal]["datap"] || 0) + (spectrumWeights3[encryVal] && spectrumWeights3[encryVal]["encry"] || 0) + (spectrumWeights3[unionVal] && spectrumWeights3[unionVal]["union"] || 0) + (spectrumWeights3[childlabVal] && spectrumWeights3[childlabVal]["childlab"] || 0) + (spectrumWeights3[ippropVal] && spectrumWeights3[ippropVal]["ipprop"] || 0) + (spectrumWeights3[trialVal] && spectrumWeights3[trialVal]["trial"] || 0) + (spectrumWeights3[prisonVal] && spectrumWeights3[prisonVal]["prison"] || 0) + (spectrumWeights3[poloverVal] && spectrumWeights3[poloverVal]["polover"] || 0) + (spectrumWeights3[compulsedVal] && spectrumWeights3[compulsedVal]["compulsed"] || 0) + (spectrumWeights3[religedVal] && spectrumWeights3[religedVal]["religed"] || 0) + (spectrumWeights3[homeschoolVal] && spectrumWeights3[homeschoolVal]["homeschool"] || 0) + (spectrumWeights3[sexedVal] && spectrumWeights3[sexedVal]["sexed"] || 0) + (spectrumWeights3[curriculumVal] && spectrumWeights3[curriculumVal]["curriculum"] || 0) + (spectrumWeights3[healthsysVal] && spectrumWeights3[healthsysVal]["healthsys"] || 0) + (spectrumWeights3[mentalhVal] && spectrumWeights3[mentalhVal]["mentalh"] || 0) + (spectrumWeights3[vaccVal] && spectrumWeights3[vaccVal]["vacc"] || 0) + (spectrumWeights3[marriageVal] && spectrumWeights3[marriageVal]["marriage"] || 0) + (spectrumWeights3[divorceVal] && spectrumWeights3[divorceVal]["divorce"] || 0) + (spectrumWeights3[polygamyVal] && spectrumWeights3[polygamyVal]["polygamy"] || 0) + (spectrumWeights3[ageconsentVal] && spectrumWeights3[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights3[pressfVal] && spectrumWeights3[pressfVal]["pressf"] || 0) + (spectrumWeights3[assemblyVal] && spectrumWeights3[assemblyVal]["assembly"] || 0) + (spectrumWeights3[censorVal] && spectrumWeights3[censorVal]["censor"] || 0) + (spectrumWeights3[slaveryVal] && spectrumWeights3[slaveryVal]["slavery"] || 0) + (spectrumWeights3[citizenVal] && spectrumWeights3[citizenVal]["citizen"] || 0) + (spectrumWeights3[deathpenVal] && spectrumWeights3[deathpenVal]["deathpen"] || 0) + (spectrumWeights3[socreditVal] && spectrumWeights3[socreditVal]["socredit"] || 0) + (spectrumWeights3[trialVal] && spectrumWeights3[trialVal]["trial"] || 0) + (spectrumWeights3[prisonVal] && spectrumWeights3[prisonVal]["prison"] || 0) + (spectrumWeights3[poloverVal] && spectrumWeights3[poloverVal]["polover"] || 0) + (spectrumWeights3[unionVal] && spectrumWeights3[unionVal]["union"] || 0) + (spectrumWeights3[childlabVal] && spectrumWeights3[childlabVal]["childlab"] || 0) + (spectrumWeights3[ippropVal] && spectrumWeights3[ippropVal]["ipprop"] || 0) + (spectrumWeights3[housingVal] && spectrumWeights3[housingVal]["housing"] || 0) + (spectrumWeights3[landowVal] && spectrumWeights3[landowVal]["landow"] || 0) + (spectrumWeights3[eminentVal] && spectrumWeights3[eminentVal]["eminent"] || 0) + (spectrumWeights3[homelessVal] && spectrumWeights3[homelessVal]["homeless"] || 0) + (spectrumWeights3[carbpolVal] && spectrumWeights3[carbpolVal]["carbpol"] || 0) + (spectrumWeights3[nucpolVal] && spectrumWeights3[nucpolVal]["nucpol"] || 0) + (spectrumWeights3[animalVal] && spectrumWeights3[animalVal]["animal"] || 0) + (spectrumWeights3[gmoVal] && spectrumWeights3[gmoVal]["gmo"] || 0) + (spectrumWeights3[waterVal] && spectrumWeights3[waterVal]["water"] || 0) + (spectrumWeights3[statemediaVal] && spectrumWeights3[statemediaVal]["statemedia"] || 0) + (spectrumWeights3[langpolVal] && spectrumWeights3[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights3[hatespeechVal] && spectrumWeights3[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights3[transitVal] && spectrumWeights3[transitVal]["transit"] || 0) + (spectrumWeights3[roadsVal] && spectrumWeights3[roadsVal]["roads"] || 0) + (spectrumWeights3[autodriveVal] && spectrumWeights3[autodriveVal]["autodrive"] || 0) + (spectrumWeights3[spaceVal] && spectrumWeights3[spaceVal]["space"] || 0) + (spectrumWeights3[cryptoVal] && spectrumWeights3[cryptoVal]["crypto"] || 0) + (spectrumWeights3[bankruptVal] && spectrumWeights3[bankruptVal]["bankrupt"] || 0) + (spectrumWeights3[ubitypeVal] && spectrumWeights3[ubitypeVal]["ubitype"] || 0) + (spectrumWeights3[wealthtaxVal] && spectrumWeights3[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights3[statebankVal] && spectrumWeights3[statebankVal]["statebank"] || 0) + (spectrumWeights3[airegulVal] && spectrumWeights3[airegulVal]["airegul"] || 0) + (spectrumWeights3[cloningVal] && spectrumWeights3[cloningVal]["cloning"] || 0) + (spectrumWeights3[stemcellVal] && spectrumWeights3[stemcellVal]["stemcell"] || 0) + (spectrumWeights3[geneditVal] && spectrumWeights3[geneditVal]["genedit"] || 0) + (spectrumWeights3[dataownVal] && spectrumWeights3[dataownVal]["dataown"] || 0) + (spectrumWeights3[taxloopVal] && spectrumWeights3[taxloopVal]["taxloop"] || 0) + (spectrumWeights3[citizenpathVal] && spectrumWeights3[citizenpathVal]["citizenpath"] || 0);
    var ax3Total=ax3Total* 0.96+ sectors[1]["ownz"]* 0.04;
    var ax4ImmDivisor=4;
    var ax4ImmBase=0;
    if(immanVal== 2.5) {
      var ax4ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax4ImmBase=spectrumWeights4[0]["imman"]
      }
    };
    var ax4ImmScore=ax4ImmBase+ ((immanVal/ ax4ImmDivisor)* spectrumWeights4[2]["imman"])* ((immstVal/ 100)* spectrumWeights4[2]["immst"]+ (immwoVal/ 100)* spectrumWeights4[2]["immwo"]+ (immasVal/ 100)* spectrumWeights4[2]["immas"]+ (immrefVal/ 100)* spectrumWeights4[2]["immref"]);
    spectrumWeights4[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights4[7]["votr"]= spectrumWeights4[7]["votr"]+  +spectrumWeights4[votrVal[i]]["votr"]
      }
    };
    spectrumWeights4[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights4[7]["entreq"]= spectrumWeights4[7]["entreq"]+  +spectrumWeights4[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights4[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights4[7]["envreg"]= spectrumWeights4[7]["envreg"]+  +spectrumWeights4[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights4[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights4[7]["womrig"]= spectrumWeights4[7]["womrig"]+  +spectrumWeights4[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights4[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights4[7]["centfun"]= spectrumWeights4[7]["centfun"]+  +spectrumWeights4[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights4[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights4[7]["abort"]= spectrumWeights4[7]["abort"]+  +spectrumWeights4[abortVal[i]]["abort"]
      }
    };
    spectrumWeights4[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights4[7]["fabort"]= spectrumWeights4[7]["fabort"]+  +spectrumWeights4[fabortVal[i]]["fabort"]
      }
    };
    var ax4Total=ax4ImmScore+ spectrumWeights4[sovVal]["sov"]+ spectrumWeights4[autoVal]["auto"]+ spectrumWeights4[govgVal]["govg"]+ spectrumWeights4[govcVal]["govc"]+ spectrumWeights4[syseVal]["syse"]+ spectrumWeights4[syslVal]["sysl"]+ spectrumWeights4[sysjVal]["sysj"]+ spectrumWeights4[relVal]["rel"]+ spectrumWeights4[forPolVal]["for"]+ spectrumWeights4[conscrVal]["cons"]+ spectrumWeights4[righVal]["righ"]+ spectrumWeights4[minwVal]["minw"]+ spectrumWeights4[minw2Val]["minw2"]+ spectrumWeights4[pensregVal]["pensreg"]+ spectrumWeights4[centowVal]["centow"]+ spectrumWeights4[murdVal]["murd"]+ spectrumWeights4[rapeVal]["rape"]+ spectrumWeights4[stealVal]["steal"]+ spectrumWeights4[childVal]["child"]+ spectrumWeights4[defaVal]["defa"]+ spectrumWeights4[incitVal]["incit"]+ spectrumWeights4[prostVal]["stprost"]+ spectrumWeights4[brothVal]["broth"]+ spectrumWeights4[escoVal]["esco"]+ spectrumWeights4[handVal]["hand"]+ spectrumWeights4[shotVal]["shot"]+ spectrumWeights4[rifleVal]["rifle"]+ spectrumWeights4[casinVal]["casin"]+ spectrumWeights4[oncasinVal]["oncasin"]+ spectrumWeights4[sportsVal]["sports"]+ spectrumWeights4[homogenVal]["homogen"]+ spectrumWeights4[homoadVal]["homoad"]+ spectrumWeights4[transgenVal]["transgen"]+ spectrumWeights4[transadVal]["transad"]+ spectrumWeights4[tobusVal]["tobus"]+ spectrumWeights4[tobselVal]["tobsel"]+ spectrumWeights4[alcusVal]["alcus"]+ spectrumWeights4[alcselVal]["alcsel"]+ spectrumWeights4[canusVal]["canus"]+ spectrumWeights4[canselVal]["cansel"]+ spectrumWeights4[psyusVal]["psyus"]+ spectrumWeights4[psyselVal]["psysel"]+ spectrumWeights4[stiusVal]["stius"]+ spectrumWeights4[stiselVal]["stisel"]+ spectrumWeights4[opiusVal]["opius"]+ spectrumWeights4[opiselVal]["opisel"]+ spectrumWeights4[euthVal]["euth"]+ spectrumWeights4[obscVal]["obsc"]+ spectrumWeights4[warcVal]["warc"]+ spectrumWeights4[corfVal]["corf"]+ spectrumWeights4[blasphVal]["blasph"]+ spectrumWeights4[treasVal]["treas"]+ spectrumWeights4[embeVal]["embe"]+ spectrumWeights4[misceVal]["misce"]+ spectrumWeights4[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights4[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights4[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights4[2]["inher"]+ (reservVal/ 100)* spectrumWeights4[2]["reserv"]+ (poverVal/ 100)* spectrumWeights4[2]["pover"]+ (unempVal/ 100)* spectrumWeights4[2]["unemp"]+ (pensVal/ 100)* spectrumWeights4[2]["pens"]+ (minincVal/ 100)* spectrumWeights4[2]["mininc"]+ (basincVal/ 100)* spectrumWeights4[2]["basinc"]+ (wastVal/ 100)* spectrumWeights4[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights4[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights4[2]["conser"]+ (solarVal/ 100)* spectrumWeights4[2]["solar"]+ (nuclVal/ 100)* spectrumWeights4[2]["nucl"]+ (rndVal/ 100)* spectrumWeights4[2]["rnd"]+ spectrumWeights4[7]["votr"]+ spectrumWeights4[7]["entreq"]+ spectrumWeights4[7]["envreg"]+ spectrumWeights4[7]["womrig"]+ spectrumWeights4[7]["centfun"]+ spectrumWeights4[7]["abort"]+ spectrumWeights4[7]["fabort"] + (spectrumWeights4[survVal] && spectrumWeights4[survVal]["surv"] || 0) + (spectrumWeights4[datapVal] && spectrumWeights4[datapVal]["datap"] || 0) + (spectrumWeights4[encryVal] && spectrumWeights4[encryVal]["encry"] || 0) + (spectrumWeights4[unionVal] && spectrumWeights4[unionVal]["union"] || 0) + (spectrumWeights4[childlabVal] && spectrumWeights4[childlabVal]["childlab"] || 0) + (spectrumWeights4[ippropVal] && spectrumWeights4[ippropVal]["ipprop"] || 0) + (spectrumWeights4[trialVal] && spectrumWeights4[trialVal]["trial"] || 0) + (spectrumWeights4[prisonVal] && spectrumWeights4[prisonVal]["prison"] || 0) + (spectrumWeights4[poloverVal] && spectrumWeights4[poloverVal]["polover"] || 0) + (spectrumWeights4[compulsedVal] && spectrumWeights4[compulsedVal]["compulsed"] || 0) + (spectrumWeights4[religedVal] && spectrumWeights4[religedVal]["religed"] || 0) + (spectrumWeights4[homeschoolVal] && spectrumWeights4[homeschoolVal]["homeschool"] || 0) + (spectrumWeights4[sexedVal] && spectrumWeights4[sexedVal]["sexed"] || 0) + (spectrumWeights4[curriculumVal] && spectrumWeights4[curriculumVal]["curriculum"] || 0) + (spectrumWeights4[healthsysVal] && spectrumWeights4[healthsysVal]["healthsys"] || 0) + (spectrumWeights4[mentalhVal] && spectrumWeights4[mentalhVal]["mentalh"] || 0) + (spectrumWeights4[vaccVal] && spectrumWeights4[vaccVal]["vacc"] || 0) + (spectrumWeights4[marriageVal] && spectrumWeights4[marriageVal]["marriage"] || 0) + (spectrumWeights4[divorceVal] && spectrumWeights4[divorceVal]["divorce"] || 0) + (spectrumWeights4[polygamyVal] && spectrumWeights4[polygamyVal]["polygamy"] || 0) + (spectrumWeights4[ageconsentVal] && spectrumWeights4[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights4[pressfVal] && spectrumWeights4[pressfVal]["pressf"] || 0) + (spectrumWeights4[assemblyVal] && spectrumWeights4[assemblyVal]["assembly"] || 0) + (spectrumWeights4[censorVal] && spectrumWeights4[censorVal]["censor"] || 0) + (spectrumWeights4[slaveryVal] && spectrumWeights4[slaveryVal]["slavery"] || 0) + (spectrumWeights4[citizenVal] && spectrumWeights4[citizenVal]["citizen"] || 0) + (spectrumWeights4[deathpenVal] && spectrumWeights4[deathpenVal]["deathpen"] || 0) + (spectrumWeights4[socreditVal] && spectrumWeights4[socreditVal]["socredit"] || 0) + (spectrumWeights4[trialVal] && spectrumWeights4[trialVal]["trial"] || 0) + (spectrumWeights4[prisonVal] && spectrumWeights4[prisonVal]["prison"] || 0) + (spectrumWeights4[poloverVal] && spectrumWeights4[poloverVal]["polover"] || 0) + (spectrumWeights4[unionVal] && spectrumWeights4[unionVal]["union"] || 0) + (spectrumWeights4[childlabVal] && spectrumWeights4[childlabVal]["childlab"] || 0) + (spectrumWeights4[ippropVal] && spectrumWeights4[ippropVal]["ipprop"] || 0) + (spectrumWeights4[housingVal] && spectrumWeights4[housingVal]["housing"] || 0) + (spectrumWeights4[landowVal] && spectrumWeights4[landowVal]["landow"] || 0) + (spectrumWeights4[eminentVal] && spectrumWeights4[eminentVal]["eminent"] || 0) + (spectrumWeights4[homelessVal] && spectrumWeights4[homelessVal]["homeless"] || 0) + (spectrumWeights4[carbpolVal] && spectrumWeights4[carbpolVal]["carbpol"] || 0) + (spectrumWeights4[nucpolVal] && spectrumWeights4[nucpolVal]["nucpol"] || 0) + (spectrumWeights4[animalVal] && spectrumWeights4[animalVal]["animal"] || 0) + (spectrumWeights4[gmoVal] && spectrumWeights4[gmoVal]["gmo"] || 0) + (spectrumWeights4[waterVal] && spectrumWeights4[waterVal]["water"] || 0) + (spectrumWeights4[statemediaVal] && spectrumWeights4[statemediaVal]["statemedia"] || 0) + (spectrumWeights4[langpolVal] && spectrumWeights4[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights4[hatespeechVal] && spectrumWeights4[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights4[transitVal] && spectrumWeights4[transitVal]["transit"] || 0) + (spectrumWeights4[roadsVal] && spectrumWeights4[roadsVal]["roads"] || 0) + (spectrumWeights4[autodriveVal] && spectrumWeights4[autodriveVal]["autodrive"] || 0) + (spectrumWeights4[spaceVal] && spectrumWeights4[spaceVal]["space"] || 0) + (spectrumWeights4[cryptoVal] && spectrumWeights4[cryptoVal]["crypto"] || 0) + (spectrumWeights4[bankruptVal] && spectrumWeights4[bankruptVal]["bankrupt"] || 0) + (spectrumWeights4[ubitypeVal] && spectrumWeights4[ubitypeVal]["ubitype"] || 0) + (spectrumWeights4[wealthtaxVal] && spectrumWeights4[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights4[statebankVal] && spectrumWeights4[statebankVal]["statebank"] || 0) + (spectrumWeights4[airegulVal] && spectrumWeights4[airegulVal]["airegul"] || 0) + (spectrumWeights4[cloningVal] && spectrumWeights4[cloningVal]["cloning"] || 0) + (spectrumWeights4[stemcellVal] && spectrumWeights4[stemcellVal]["stemcell"] || 0) + (spectrumWeights4[geneditVal] && spectrumWeights4[geneditVal]["genedit"] || 0) + (spectrumWeights4[dataownVal] && spectrumWeights4[dataownVal]["dataown"] || 0) + (spectrumWeights4[taxloopVal] && spectrumWeights4[taxloopVal]["taxloop"] || 0) + (spectrumWeights4[citizenpathVal] && spectrumWeights4[citizenpathVal]["citizenpath"] || 0);
    var ax5ImmDivisor=4;
    var ax5ImmBase=0;
    if(immanVal== 2.5) {
      var ax5ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax5ImmBase=spectrumWeights5[0]["imman"]
      }
    };
    var ax5ImmScore=ax5ImmBase+ ((immanVal/ ax5ImmDivisor)* spectrumWeights5[2]["imman"])* ((immstVal/ 100)* spectrumWeights5[2]["immst"]+ (immwoVal/ 100)* spectrumWeights5[2]["immwo"]+ (immasVal/ 100)* spectrumWeights5[2]["immas"]+ (immrefVal/ 100)* spectrumWeights5[2]["immref"]);
    spectrumWeights5[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights5[7]["votr"]= spectrumWeights5[7]["votr"]+  +spectrumWeights5[votrVal[i]]["votr"]
      }
    };
    spectrumWeights5[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights5[7]["entreq"]= spectrumWeights5[7]["entreq"]+  +spectrumWeights5[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights5[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights5[7]["envreg"]= spectrumWeights5[7]["envreg"]+  +spectrumWeights5[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights5[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights5[7]["womrig"]= spectrumWeights5[7]["womrig"]+  +spectrumWeights5[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights5[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights5[7]["centfun"]= spectrumWeights5[7]["centfun"]+  +spectrumWeights5[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights5[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights5[7]["abort"]= spectrumWeights5[7]["abort"]+  +spectrumWeights5[abortVal[i]]["abort"]
      }
    };
    spectrumWeights5[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights5[7]["fabort"]= spectrumWeights5[7]["fabort"]+  +spectrumWeights5[fabortVal[i]]["fabort"]
      }
    };
    var ax5Total=ax5ImmScore+ spectrumWeights5[sovVal]["sov"]+ spectrumWeights5[autoVal]["auto"]+ spectrumWeights5[govgVal]["govg"]+ spectrumWeights5[govcVal]["govc"]+ spectrumWeights5[syseVal]["syse"]+ spectrumWeights5[syslVal]["sysl"]+ spectrumWeights5[sysjVal]["sysj"]+ spectrumWeights5[relVal]["rel"]+ spectrumWeights5[forPolVal]["for"]+ spectrumWeights5[conscrVal]["cons"]+ spectrumWeights5[righVal]["righ"]+ spectrumWeights5[minwVal]["minw"]+ spectrumWeights5[minw2Val]["minw2"]+ spectrumWeights5[pensregVal]["pensreg"]+ spectrumWeights5[centowVal]["centow"]+ spectrumWeights5[murdVal]["murd"]+ spectrumWeights5[rapeVal]["rape"]+ spectrumWeights5[stealVal]["steal"]+ spectrumWeights5[childVal]["child"]+ spectrumWeights5[defaVal]["defa"]+ spectrumWeights5[incitVal]["incit"]+ spectrumWeights5[prostVal]["stprost"]+ spectrumWeights5[brothVal]["broth"]+ spectrumWeights5[escoVal]["esco"]+ spectrumWeights5[handVal]["hand"]+ spectrumWeights5[shotVal]["shot"]+ spectrumWeights5[rifleVal]["rifle"]+ spectrumWeights5[casinVal]["casin"]+ spectrumWeights5[oncasinVal]["oncasin"]+ spectrumWeights5[sportsVal]["sports"]+ spectrumWeights5[homogenVal]["homogen"]+ spectrumWeights5[homoadVal]["homoad"]+ spectrumWeights5[transgenVal]["transgen"]+ spectrumWeights5[transadVal]["transad"]+ spectrumWeights5[tobusVal]["tobus"]+ spectrumWeights5[tobselVal]["tobsel"]+ spectrumWeights5[alcusVal]["alcus"]+ spectrumWeights5[alcselVal]["alcsel"]+ spectrumWeights5[canusVal]["canus"]+ spectrumWeights5[canselVal]["cansel"]+ spectrumWeights5[psyusVal]["psyus"]+ spectrumWeights5[psyselVal]["psysel"]+ spectrumWeights5[stiusVal]["stius"]+ spectrumWeights5[stiselVal]["stisel"]+ spectrumWeights5[opiusVal]["opius"]+ spectrumWeights5[opiselVal]["opisel"]+ spectrumWeights5[euthVal]["euth"]+ spectrumWeights5[obscVal]["obsc"]+ spectrumWeights5[warcVal]["warc"]+ spectrumWeights5[corfVal]["corf"]+ spectrumWeights5[blasphVal]["blasph"]+ spectrumWeights5[treasVal]["treas"]+ spectrumWeights5[embeVal]["embe"]+ spectrumWeights5[misceVal]["misce"]+ spectrumWeights5[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights5[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights5[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights5[2]["inher"]+ (reservVal/ 100)* spectrumWeights5[2]["reserv"]+ (poverVal/ 100)* spectrumWeights5[2]["pover"]+ (unempVal/ 100)* spectrumWeights5[2]["unemp"]+ (pensVal/ 100)* spectrumWeights5[2]["pens"]+ (minincVal/ 100)* spectrumWeights5[2]["mininc"]+ (basincVal/ 100)* spectrumWeights5[2]["basinc"]+ (wastVal/ 100)* spectrumWeights5[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights5[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights5[2]["conser"]+ (solarVal/ 100)* spectrumWeights5[2]["solar"]+ (nuclVal/ 100)* spectrumWeights5[2]["nucl"]+ (rndVal/ 100)* spectrumWeights5[2]["rnd"]+ spectrumWeights5[7]["votr"]+ spectrumWeights5[7]["entreq"]+ spectrumWeights5[7]["envreg"]+ spectrumWeights5[7]["womrig"]+ spectrumWeights5[7]["centfun"]+ spectrumWeights5[7]["abort"]+ spectrumWeights5[7]["fabort"] + (spectrumWeights5[survVal] && spectrumWeights5[survVal]["surv"] || 0) + (spectrumWeights5[datapVal] && spectrumWeights5[datapVal]["datap"] || 0) + (spectrumWeights5[encryVal] && spectrumWeights5[encryVal]["encry"] || 0) + (spectrumWeights5[unionVal] && spectrumWeights5[unionVal]["union"] || 0) + (spectrumWeights5[childlabVal] && spectrumWeights5[childlabVal]["childlab"] || 0) + (spectrumWeights5[ippropVal] && spectrumWeights5[ippropVal]["ipprop"] || 0) + (spectrumWeights5[trialVal] && spectrumWeights5[trialVal]["trial"] || 0) + (spectrumWeights5[prisonVal] && spectrumWeights5[prisonVal]["prison"] || 0) + (spectrumWeights5[poloverVal] && spectrumWeights5[poloverVal]["polover"] || 0) + (spectrumWeights5[compulsedVal] && spectrumWeights5[compulsedVal]["compulsed"] || 0) + (spectrumWeights5[religedVal] && spectrumWeights5[religedVal]["religed"] || 0) + (spectrumWeights5[homeschoolVal] && spectrumWeights5[homeschoolVal]["homeschool"] || 0) + (spectrumWeights5[sexedVal] && spectrumWeights5[sexedVal]["sexed"] || 0) + (spectrumWeights5[curriculumVal] && spectrumWeights5[curriculumVal]["curriculum"] || 0) + (spectrumWeights5[healthsysVal] && spectrumWeights5[healthsysVal]["healthsys"] || 0) + (spectrumWeights5[mentalhVal] && spectrumWeights5[mentalhVal]["mentalh"] || 0) + (spectrumWeights5[vaccVal] && spectrumWeights5[vaccVal]["vacc"] || 0) + (spectrumWeights5[marriageVal] && spectrumWeights5[marriageVal]["marriage"] || 0) + (spectrumWeights5[divorceVal] && spectrumWeights5[divorceVal]["divorce"] || 0) + (spectrumWeights5[polygamyVal] && spectrumWeights5[polygamyVal]["polygamy"] || 0) + (spectrumWeights5[ageconsentVal] && spectrumWeights5[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights5[pressfVal] && spectrumWeights5[pressfVal]["pressf"] || 0) + (spectrumWeights5[assemblyVal] && spectrumWeights5[assemblyVal]["assembly"] || 0) + (spectrumWeights5[censorVal] && spectrumWeights5[censorVal]["censor"] || 0) + (spectrumWeights5[slaveryVal] && spectrumWeights5[slaveryVal]["slavery"] || 0) + (spectrumWeights5[citizenVal] && spectrumWeights5[citizenVal]["citizen"] || 0) + (spectrumWeights5[deathpenVal] && spectrumWeights5[deathpenVal]["deathpen"] || 0) + (spectrumWeights5[socreditVal] && spectrumWeights5[socreditVal]["socredit"] || 0) + (spectrumWeights5[trialVal] && spectrumWeights5[trialVal]["trial"] || 0) + (spectrumWeights5[prisonVal] && spectrumWeights5[prisonVal]["prison"] || 0) + (spectrumWeights5[poloverVal] && spectrumWeights5[poloverVal]["polover"] || 0) + (spectrumWeights5[unionVal] && spectrumWeights5[unionVal]["union"] || 0) + (spectrumWeights5[childlabVal] && spectrumWeights5[childlabVal]["childlab"] || 0) + (spectrumWeights5[ippropVal] && spectrumWeights5[ippropVal]["ipprop"] || 0) + (spectrumWeights5[housingVal] && spectrumWeights5[housingVal]["housing"] || 0) + (spectrumWeights5[landowVal] && spectrumWeights5[landowVal]["landow"] || 0) + (spectrumWeights5[eminentVal] && spectrumWeights5[eminentVal]["eminent"] || 0) + (spectrumWeights5[homelessVal] && spectrumWeights5[homelessVal]["homeless"] || 0) + (spectrumWeights5[carbpolVal] && spectrumWeights5[carbpolVal]["carbpol"] || 0) + (spectrumWeights5[nucpolVal] && spectrumWeights5[nucpolVal]["nucpol"] || 0) + (spectrumWeights5[animalVal] && spectrumWeights5[animalVal]["animal"] || 0) + (spectrumWeights5[gmoVal] && spectrumWeights5[gmoVal]["gmo"] || 0) + (spectrumWeights5[waterVal] && spectrumWeights5[waterVal]["water"] || 0) + (spectrumWeights5[statemediaVal] && spectrumWeights5[statemediaVal]["statemedia"] || 0) + (spectrumWeights5[langpolVal] && spectrumWeights5[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights5[hatespeechVal] && spectrumWeights5[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights5[transitVal] && spectrumWeights5[transitVal]["transit"] || 0) + (spectrumWeights5[roadsVal] && spectrumWeights5[roadsVal]["roads"] || 0) + (spectrumWeights5[autodriveVal] && spectrumWeights5[autodriveVal]["autodrive"] || 0) + (spectrumWeights5[spaceVal] && spectrumWeights5[spaceVal]["space"] || 0) + (spectrumWeights5[cryptoVal] && spectrumWeights5[cryptoVal]["crypto"] || 0) + (spectrumWeights5[bankruptVal] && spectrumWeights5[bankruptVal]["bankrupt"] || 0) + (spectrumWeights5[ubitypeVal] && spectrumWeights5[ubitypeVal]["ubitype"] || 0) + (spectrumWeights5[wealthtaxVal] && spectrumWeights5[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights5[statebankVal] && spectrumWeights5[statebankVal]["statebank"] || 0) + (spectrumWeights5[airegulVal] && spectrumWeights5[airegulVal]["airegul"] || 0) + (spectrumWeights5[cloningVal] && spectrumWeights5[cloningVal]["cloning"] || 0) + (spectrumWeights5[stemcellVal] && spectrumWeights5[stemcellVal]["stemcell"] || 0) + (spectrumWeights5[geneditVal] && spectrumWeights5[geneditVal]["genedit"] || 0) + (spectrumWeights5[dataownVal] && spectrumWeights5[dataownVal]["dataown"] || 0) + (spectrumWeights5[taxloopVal] && spectrumWeights5[taxloopVal]["taxloop"] || 0) + (spectrumWeights5[citizenpathVal] && spectrumWeights5[citizenpathVal]["citizenpath"] || 0);
    var ax6ImmDivisor=4;
    var ax6ImmBase=0;
    if(immanVal== 2.5) {
      var ax6ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax6ImmBase=spectrumWeights6[0]["imman"]
      }
    };
    var ax6ImmScore=ax6ImmBase+ ((immanVal/ ax6ImmDivisor)* spectrumWeights6[2]["imman"])* ((immstVal/ 100)* spectrumWeights6[2]["immst"]+ (immwoVal/ 100)* spectrumWeights6[2]["immwo"]+ (immasVal/ 100)* spectrumWeights6[2]["immas"]+ (immrefVal/ 100)* spectrumWeights6[2]["immref"]);
    spectrumWeights6[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights6[7]["votr"]= spectrumWeights6[7]["votr"]+  +spectrumWeights6[votrVal[i]]["votr"]
      }
    };
    spectrumWeights6[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights6[7]["entreq"]= spectrumWeights6[7]["entreq"]+  +spectrumWeights6[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights6[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights6[7]["envreg"]= spectrumWeights6[7]["envreg"]+  +spectrumWeights6[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights6[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights6[7]["womrig"]= spectrumWeights6[7]["womrig"]+  +spectrumWeights6[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights6[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights6[7]["centfun"]= spectrumWeights6[7]["centfun"]+  +spectrumWeights6[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights6[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights6[7]["abort"]= spectrumWeights6[7]["abort"]+  +spectrumWeights6[abortVal[i]]["abort"]
      }
    };
    spectrumWeights6[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights6[7]["fabort"]= spectrumWeights6[7]["fabort"]+  +spectrumWeights6[fabortVal[i]]["fabort"]
      }
    };
    var ax6Total=ax6ImmScore+ spectrumWeights6[sovVal]["sov"]+ spectrumWeights6[autoVal]["auto"]+ spectrumWeights6[govgVal]["govg"]+ spectrumWeights6[govcVal]["govc"]+ spectrumWeights6[syseVal]["syse"]+ spectrumWeights6[syslVal]["sysl"]+ spectrumWeights6[sysjVal]["sysj"]+ spectrumWeights6[relVal]["rel"]+ spectrumWeights6[forPolVal]["for"]+ spectrumWeights6[conscrVal]["cons"]+ spectrumWeights6[righVal]["righ"]+ spectrumWeights6[minwVal]["minw"]+ spectrumWeights6[minw2Val]["minw2"]+ spectrumWeights6[pensregVal]["pensreg"]+ spectrumWeights6[centowVal]["centow"]+ spectrumWeights6[murdVal]["murd"]+ spectrumWeights6[rapeVal]["rape"]+ spectrumWeights6[stealVal]["steal"]+ spectrumWeights6[childVal]["child"]+ spectrumWeights6[defaVal]["defa"]+ spectrumWeights6[incitVal]["incit"]+ spectrumWeights6[prostVal]["stprost"]+ spectrumWeights6[brothVal]["broth"]+ spectrumWeights6[escoVal]["esco"]+ spectrumWeights6[handVal]["hand"]+ spectrumWeights6[shotVal]["shot"]+ spectrumWeights6[rifleVal]["rifle"]+ spectrumWeights6[casinVal]["casin"]+ spectrumWeights6[oncasinVal]["oncasin"]+ spectrumWeights6[sportsVal]["sports"]+ spectrumWeights6[homogenVal]["homogen"]+ spectrumWeights6[homoadVal]["homoad"]+ spectrumWeights6[transgenVal]["transgen"]+ spectrumWeights6[transadVal]["transad"]+ spectrumWeights6[tobusVal]["tobus"]+ spectrumWeights6[tobselVal]["tobsel"]+ spectrumWeights6[alcusVal]["alcus"]+ spectrumWeights6[alcselVal]["alcsel"]+ spectrumWeights6[canusVal]["canus"]+ spectrumWeights6[canselVal]["cansel"]+ spectrumWeights6[psyusVal]["psyus"]+ spectrumWeights6[psyselVal]["psysel"]+ spectrumWeights6[stiusVal]["stius"]+ spectrumWeights6[stiselVal]["stisel"]+ spectrumWeights6[opiusVal]["opius"]+ spectrumWeights6[opiselVal]["opisel"]+ spectrumWeights6[euthVal]["euth"]+ spectrumWeights6[obscVal]["obsc"]+ spectrumWeights6[warcVal]["warc"]+ spectrumWeights6[corfVal]["corf"]+ spectrumWeights6[blasphVal]["blasph"]+ spectrumWeights6[treasVal]["treas"]+ spectrumWeights6[embeVal]["embe"]+ spectrumWeights6[misceVal]["misce"]+ spectrumWeights6[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights6[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights6[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights6[2]["inher"]+ (reservVal/ 100)* spectrumWeights6[2]["reserv"]+ (poverVal/ 100)* spectrumWeights6[2]["pover"]+ (unempVal/ 100)* spectrumWeights6[2]["unemp"]+ (pensVal/ 100)* spectrumWeights6[2]["pens"]+ (minincVal/ 100)* spectrumWeights6[2]["mininc"]+ (basincVal/ 100)* spectrumWeights6[2]["basinc"]+ (wastVal/ 100)* spectrumWeights6[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights6[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights6[2]["conser"]+ (solarVal/ 100)* spectrumWeights6[2]["solar"]+ (nuclVal/ 100)* spectrumWeights6[2]["nucl"]+ (rndVal/ 100)* spectrumWeights6[2]["rnd"]+ spectrumWeights6[7]["votr"]+ spectrumWeights6[7]["entreq"]+ spectrumWeights6[7]["envreg"]+ spectrumWeights6[7]["womrig"]+ spectrumWeights6[7]["centfun"]+ spectrumWeights6[7]["abort"]+ spectrumWeights6[7]["fabort"] + (spectrumWeights6[survVal] && spectrumWeights6[survVal]["surv"] || 0) + (spectrumWeights6[datapVal] && spectrumWeights6[datapVal]["datap"] || 0) + (spectrumWeights6[encryVal] && spectrumWeights6[encryVal]["encry"] || 0) + (spectrumWeights6[unionVal] && spectrumWeights6[unionVal]["union"] || 0) + (spectrumWeights6[childlabVal] && spectrumWeights6[childlabVal]["childlab"] || 0) + (spectrumWeights6[ippropVal] && spectrumWeights6[ippropVal]["ipprop"] || 0) + (spectrumWeights6[trialVal] && spectrumWeights6[trialVal]["trial"] || 0) + (spectrumWeights6[prisonVal] && spectrumWeights6[prisonVal]["prison"] || 0) + (spectrumWeights6[poloverVal] && spectrumWeights6[poloverVal]["polover"] || 0) + (spectrumWeights6[compulsedVal] && spectrumWeights6[compulsedVal]["compulsed"] || 0) + (spectrumWeights6[religedVal] && spectrumWeights6[religedVal]["religed"] || 0) + (spectrumWeights6[homeschoolVal] && spectrumWeights6[homeschoolVal]["homeschool"] || 0) + (spectrumWeights6[sexedVal] && spectrumWeights6[sexedVal]["sexed"] || 0) + (spectrumWeights6[curriculumVal] && spectrumWeights6[curriculumVal]["curriculum"] || 0) + (spectrumWeights6[healthsysVal] && spectrumWeights6[healthsysVal]["healthsys"] || 0) + (spectrumWeights6[mentalhVal] && spectrumWeights6[mentalhVal]["mentalh"] || 0) + (spectrumWeights6[vaccVal] && spectrumWeights6[vaccVal]["vacc"] || 0) + (spectrumWeights6[marriageVal] && spectrumWeights6[marriageVal]["marriage"] || 0) + (spectrumWeights6[divorceVal] && spectrumWeights6[divorceVal]["divorce"] || 0) + (spectrumWeights6[polygamyVal] && spectrumWeights6[polygamyVal]["polygamy"] || 0) + (spectrumWeights6[ageconsentVal] && spectrumWeights6[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights6[pressfVal] && spectrumWeights6[pressfVal]["pressf"] || 0) + (spectrumWeights6[assemblyVal] && spectrumWeights6[assemblyVal]["assembly"] || 0) + (spectrumWeights6[censorVal] && spectrumWeights6[censorVal]["censor"] || 0) + (spectrumWeights6[slaveryVal] && spectrumWeights6[slaveryVal]["slavery"] || 0) + (spectrumWeights6[citizenVal] && spectrumWeights6[citizenVal]["citizen"] || 0) + (spectrumWeights6[deathpenVal] && spectrumWeights6[deathpenVal]["deathpen"] || 0) + (spectrumWeights6[socreditVal] && spectrumWeights6[socreditVal]["socredit"] || 0) + (spectrumWeights6[trialVal] && spectrumWeights6[trialVal]["trial"] || 0) + (spectrumWeights6[prisonVal] && spectrumWeights6[prisonVal]["prison"] || 0) + (spectrumWeights6[poloverVal] && spectrumWeights6[poloverVal]["polover"] || 0) + (spectrumWeights6[unionVal] && spectrumWeights6[unionVal]["union"] || 0) + (spectrumWeights6[childlabVal] && spectrumWeights6[childlabVal]["childlab"] || 0) + (spectrumWeights6[ippropVal] && spectrumWeights6[ippropVal]["ipprop"] || 0) + (spectrumWeights6[housingVal] && spectrumWeights6[housingVal]["housing"] || 0) + (spectrumWeights6[landowVal] && spectrumWeights6[landowVal]["landow"] || 0) + (spectrumWeights6[eminentVal] && spectrumWeights6[eminentVal]["eminent"] || 0) + (spectrumWeights6[homelessVal] && spectrumWeights6[homelessVal]["homeless"] || 0) + (spectrumWeights6[carbpolVal] && spectrumWeights6[carbpolVal]["carbpol"] || 0) + (spectrumWeights6[nucpolVal] && spectrumWeights6[nucpolVal]["nucpol"] || 0) + (spectrumWeights6[animalVal] && spectrumWeights6[animalVal]["animal"] || 0) + (spectrumWeights6[gmoVal] && spectrumWeights6[gmoVal]["gmo"] || 0) + (spectrumWeights6[waterVal] && spectrumWeights6[waterVal]["water"] || 0) + (spectrumWeights6[statemediaVal] && spectrumWeights6[statemediaVal]["statemedia"] || 0) + (spectrumWeights6[langpolVal] && spectrumWeights6[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights6[hatespeechVal] && spectrumWeights6[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights6[transitVal] && spectrumWeights6[transitVal]["transit"] || 0) + (spectrumWeights6[roadsVal] && spectrumWeights6[roadsVal]["roads"] || 0) + (spectrumWeights6[autodriveVal] && spectrumWeights6[autodriveVal]["autodrive"] || 0) + (spectrumWeights6[spaceVal] && spectrumWeights6[spaceVal]["space"] || 0) + (spectrumWeights6[cryptoVal] && spectrumWeights6[cryptoVal]["crypto"] || 0) + (spectrumWeights6[bankruptVal] && spectrumWeights6[bankruptVal]["bankrupt"] || 0) + (spectrumWeights6[ubitypeVal] && spectrumWeights6[ubitypeVal]["ubitype"] || 0) + (spectrumWeights6[wealthtaxVal] && spectrumWeights6[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights6[statebankVal] && spectrumWeights6[statebankVal]["statebank"] || 0) + (spectrumWeights6[airegulVal] && spectrumWeights6[airegulVal]["airegul"] || 0) + (spectrumWeights6[cloningVal] && spectrumWeights6[cloningVal]["cloning"] || 0) + (spectrumWeights6[stemcellVal] && spectrumWeights6[stemcellVal]["stemcell"] || 0) + (spectrumWeights6[geneditVal] && spectrumWeights6[geneditVal]["genedit"] || 0) + (spectrumWeights6[dataownVal] && spectrumWeights6[dataownVal]["dataown"] || 0) + (spectrumWeights6[taxloopVal] && spectrumWeights6[taxloopVal]["taxloop"] || 0) + (spectrumWeights6[citizenpathVal] && spectrumWeights6[citizenpathVal]["citizenpath"] || 0);
    var ax7ImmDivisor=4;
    var ax7ImmBase=0;
    if(immanVal== 2.5) {
      var ax7ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax7ImmBase=spectrumWeights7[0]["imman"]
      }
    };
    var ax7ImmScore=ax7ImmBase+ ((immanVal/ ax7ImmDivisor)* spectrumWeights7[2]["imman"])* ((immstVal/ 100)* spectrumWeights7[2]["immst"]+ (immwoVal/ 100)* spectrumWeights7[2]["immwo"]+ (immasVal/ 100)* spectrumWeights7[2]["immas"]+ (immrefVal/ 100)* spectrumWeights7[2]["immref"]);
    spectrumWeights7[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights7[7]["votr"]= spectrumWeights7[7]["votr"]+  +spectrumWeights7[votrVal[i]]["votr"]
      }
    };
    spectrumWeights7[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights7[7]["entreq"]= spectrumWeights7[7]["entreq"]+  +spectrumWeights7[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights7[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights7[7]["envreg"]= spectrumWeights7[7]["envreg"]+  +spectrumWeights7[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights7[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights7[7]["womrig"]= spectrumWeights7[7]["womrig"]+  +spectrumWeights7[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights7[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights7[7]["centfun"]= spectrumWeights7[7]["centfun"]+  +spectrumWeights7[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights7[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights7[7]["abort"]= spectrumWeights7[7]["abort"]+  +spectrumWeights7[abortVal[i]]["abort"]
      }
    };
    spectrumWeights7[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights7[7]["fabort"]= spectrumWeights7[7]["fabort"]+  +spectrumWeights7[fabortVal[i]]["fabort"]
      }
    };
    var ax7Total=ax7ImmScore+ spectrumWeights7[sovVal]["sov"]+ spectrumWeights7[autoVal]["auto"]+ spectrumWeights7[govgVal]["govg"]+ spectrumWeights7[govcVal]["govc"]+ spectrumWeights7[syseVal]["syse"]+ spectrumWeights7[syslVal]["sysl"]+ spectrumWeights7[sysjVal]["sysj"]+ spectrumWeights7[relVal]["rel"]+ spectrumWeights7[forPolVal]["for"]+ spectrumWeights7[conscrVal]["cons"]+ spectrumWeights7[righVal]["righ"]+ spectrumWeights7[minwVal]["minw"]+ spectrumWeights7[minw2Val]["minw2"]+ spectrumWeights7[pensregVal]["pensreg"]+ spectrumWeights7[centowVal]["centow"]+ spectrumWeights7[murdVal]["murd"]+ spectrumWeights7[rapeVal]["rape"]+ spectrumWeights7[stealVal]["steal"]+ spectrumWeights7[childVal]["child"]+ spectrumWeights7[defaVal]["defa"]+ spectrumWeights7[incitVal]["incit"]+ spectrumWeights7[prostVal]["stprost"]+ spectrumWeights7[brothVal]["broth"]+ spectrumWeights7[escoVal]["esco"]+ spectrumWeights7[handVal]["hand"]+ spectrumWeights7[shotVal]["shot"]+ spectrumWeights7[rifleVal]["rifle"]+ spectrumWeights7[casinVal]["casin"]+ spectrumWeights7[oncasinVal]["oncasin"]+ spectrumWeights7[sportsVal]["sports"]+ spectrumWeights7[homogenVal]["homogen"]+ spectrumWeights7[homoadVal]["homoad"]+ spectrumWeights7[transgenVal]["transgen"]+ spectrumWeights7[transadVal]["transad"]+ spectrumWeights7[tobusVal]["tobus"]+ spectrumWeights7[tobselVal]["tobsel"]+ spectrumWeights7[alcusVal]["alcus"]+ spectrumWeights7[alcselVal]["alcsel"]+ spectrumWeights7[canusVal]["canus"]+ spectrumWeights7[canselVal]["cansel"]+ spectrumWeights7[psyusVal]["psyus"]+ spectrumWeights7[psyselVal]["psysel"]+ spectrumWeights7[stiusVal]["stius"]+ spectrumWeights7[stiselVal]["stisel"]+ spectrumWeights7[opiusVal]["opius"]+ spectrumWeights7[opiselVal]["opisel"]+ spectrumWeights7[euthVal]["euth"]+ spectrumWeights7[obscVal]["obsc"]+ spectrumWeights7[warcVal]["warc"]+ spectrumWeights7[corfVal]["corf"]+ spectrumWeights7[blasphVal]["blasph"]+ spectrumWeights7[treasVal]["treas"]+ spectrumWeights7[embeVal]["embe"]+ spectrumWeights7[misceVal]["misce"]+ spectrumWeights7[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights7[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights7[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights7[2]["inher"]+ (reservVal/ 100)* spectrumWeights7[2]["reserv"]+ (poverVal/ 100)* spectrumWeights7[2]["pover"]+ (unempVal/ 100)* spectrumWeights7[2]["unemp"]+ (pensVal/ 100)* spectrumWeights7[2]["pens"]+ (minincVal/ 100)* spectrumWeights7[2]["mininc"]+ (basincVal/ 100)* spectrumWeights7[2]["basinc"]+ (wastVal/ 100)* spectrumWeights7[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights7[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights7[2]["conser"]+ (solarVal/ 100)* spectrumWeights7[2]["solar"]+ (nuclVal/ 100)* spectrumWeights7[2]["nucl"]+ (rndVal/ 100)* spectrumWeights7[2]["rnd"]+ spectrumWeights7[7]["votr"]+ spectrumWeights7[7]["entreq"]+ spectrumWeights7[7]["envreg"]+ spectrumWeights7[7]["womrig"]+ spectrumWeights7[7]["centfun"]+ spectrumWeights7[7]["abort"]+ spectrumWeights7[7]["fabort"] + (spectrumWeights7[survVal] && spectrumWeights7[survVal]["surv"] || 0) + (spectrumWeights7[datapVal] && spectrumWeights7[datapVal]["datap"] || 0) + (spectrumWeights7[encryVal] && spectrumWeights7[encryVal]["encry"] || 0) + (spectrumWeights7[unionVal] && spectrumWeights7[unionVal]["union"] || 0) + (spectrumWeights7[childlabVal] && spectrumWeights7[childlabVal]["childlab"] || 0) + (spectrumWeights7[ippropVal] && spectrumWeights7[ippropVal]["ipprop"] || 0) + (spectrumWeights7[trialVal] && spectrumWeights7[trialVal]["trial"] || 0) + (spectrumWeights7[prisonVal] && spectrumWeights7[prisonVal]["prison"] || 0) + (spectrumWeights7[poloverVal] && spectrumWeights7[poloverVal]["polover"] || 0) + (spectrumWeights7[compulsedVal] && spectrumWeights7[compulsedVal]["compulsed"] || 0) + (spectrumWeights7[religedVal] && spectrumWeights7[religedVal]["religed"] || 0) + (spectrumWeights7[homeschoolVal] && spectrumWeights7[homeschoolVal]["homeschool"] || 0) + (spectrumWeights7[sexedVal] && spectrumWeights7[sexedVal]["sexed"] || 0) + (spectrumWeights7[curriculumVal] && spectrumWeights7[curriculumVal]["curriculum"] || 0) + (spectrumWeights7[healthsysVal] && spectrumWeights7[healthsysVal]["healthsys"] || 0) + (spectrumWeights7[mentalhVal] && spectrumWeights7[mentalhVal]["mentalh"] || 0) + (spectrumWeights7[vaccVal] && spectrumWeights7[vaccVal]["vacc"] || 0) + (spectrumWeights7[marriageVal] && spectrumWeights7[marriageVal]["marriage"] || 0) + (spectrumWeights7[divorceVal] && spectrumWeights7[divorceVal]["divorce"] || 0) + (spectrumWeights7[polygamyVal] && spectrumWeights7[polygamyVal]["polygamy"] || 0) + (spectrumWeights7[ageconsentVal] && spectrumWeights7[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights7[pressfVal] && spectrumWeights7[pressfVal]["pressf"] || 0) + (spectrumWeights7[assemblyVal] && spectrumWeights7[assemblyVal]["assembly"] || 0) + (spectrumWeights7[censorVal] && spectrumWeights7[censorVal]["censor"] || 0) + (spectrumWeights7[slaveryVal] && spectrumWeights7[slaveryVal]["slavery"] || 0) + (spectrumWeights7[citizenVal] && spectrumWeights7[citizenVal]["citizen"] || 0) + (spectrumWeights7[deathpenVal] && spectrumWeights7[deathpenVal]["deathpen"] || 0) + (spectrumWeights7[socreditVal] && spectrumWeights7[socreditVal]["socredit"] || 0) + (spectrumWeights7[trialVal] && spectrumWeights7[trialVal]["trial"] || 0) + (spectrumWeights7[prisonVal] && spectrumWeights7[prisonVal]["prison"] || 0) + (spectrumWeights7[poloverVal] && spectrumWeights7[poloverVal]["polover"] || 0) + (spectrumWeights7[unionVal] && spectrumWeights7[unionVal]["union"] || 0) + (spectrumWeights7[childlabVal] && spectrumWeights7[childlabVal]["childlab"] || 0) + (spectrumWeights7[ippropVal] && spectrumWeights7[ippropVal]["ipprop"] || 0) + (spectrumWeights7[housingVal] && spectrumWeights7[housingVal]["housing"] || 0) + (spectrumWeights7[landowVal] && spectrumWeights7[landowVal]["landow"] || 0) + (spectrumWeights7[eminentVal] && spectrumWeights7[eminentVal]["eminent"] || 0) + (spectrumWeights7[homelessVal] && spectrumWeights7[homelessVal]["homeless"] || 0) + (spectrumWeights7[carbpolVal] && spectrumWeights7[carbpolVal]["carbpol"] || 0) + (spectrumWeights7[nucpolVal] && spectrumWeights7[nucpolVal]["nucpol"] || 0) + (spectrumWeights7[animalVal] && spectrumWeights7[animalVal]["animal"] || 0) + (spectrumWeights7[gmoVal] && spectrumWeights7[gmoVal]["gmo"] || 0) + (spectrumWeights7[waterVal] && spectrumWeights7[waterVal]["water"] || 0) + (spectrumWeights7[statemediaVal] && spectrumWeights7[statemediaVal]["statemedia"] || 0) + (spectrumWeights7[langpolVal] && spectrumWeights7[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights7[hatespeechVal] && spectrumWeights7[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights7[transitVal] && spectrumWeights7[transitVal]["transit"] || 0) + (spectrumWeights7[roadsVal] && spectrumWeights7[roadsVal]["roads"] || 0) + (spectrumWeights7[autodriveVal] && spectrumWeights7[autodriveVal]["autodrive"] || 0) + (spectrumWeights7[spaceVal] && spectrumWeights7[spaceVal]["space"] || 0) + (spectrumWeights7[cryptoVal] && spectrumWeights7[cryptoVal]["crypto"] || 0) + (spectrumWeights7[bankruptVal] && spectrumWeights7[bankruptVal]["bankrupt"] || 0) + (spectrumWeights7[ubitypeVal] && spectrumWeights7[ubitypeVal]["ubitype"] || 0) + (spectrumWeights7[wealthtaxVal] && spectrumWeights7[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights7[statebankVal] && spectrumWeights7[statebankVal]["statebank"] || 0) + (spectrumWeights7[airegulVal] && spectrumWeights7[airegulVal]["airegul"] || 0) + (spectrumWeights7[cloningVal] && spectrumWeights7[cloningVal]["cloning"] || 0) + (spectrumWeights7[stemcellVal] && spectrumWeights7[stemcellVal]["stemcell"] || 0) + (spectrumWeights7[geneditVal] && spectrumWeights7[geneditVal]["genedit"] || 0) + (spectrumWeights7[dataownVal] && spectrumWeights7[dataownVal]["dataown"] || 0) + (spectrumWeights7[taxloopVal] && spectrumWeights7[taxloopVal]["taxloop"] || 0) + (spectrumWeights7[citizenpathVal] && spectrumWeights7[citizenpathVal]["citizenpath"] || 0);
    var ax8ImmDivisor=4;
    var ax8ImmBase=0;
    if(immanVal== 2.5) {
      var ax8ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax8ImmBase=spectrumWeights8[0]["imman"]
      }
    };
    var ax8ImmScore=ax8ImmBase+ ((immanVal/ ax8ImmDivisor)* spectrumWeights8[2]["imman"])* ((immstVal/ 100)* spectrumWeights8[2]["immst"]+ (immwoVal/ 100)* spectrumWeights8[2]["immwo"]+ (immasVal/ 100)* spectrumWeights8[2]["immas"]+ (immrefVal/ 100)* spectrumWeights8[2]["immref"]);
    spectrumWeights8[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights8[7]["votr"]= spectrumWeights8[7]["votr"]+  +spectrumWeights8[votrVal[i]]["votr"]
      }
    };
    spectrumWeights8[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights8[7]["entreq"]= spectrumWeights8[7]["entreq"]+  +spectrumWeights8[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights8[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights8[7]["envreg"]= spectrumWeights8[7]["envreg"]+  +spectrumWeights8[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights8[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights8[7]["womrig"]= spectrumWeights8[7]["womrig"]+  +spectrumWeights8[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights8[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights8[7]["centfun"]= spectrumWeights8[7]["centfun"]+  +spectrumWeights8[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights8[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights8[7]["abort"]= spectrumWeights8[7]["abort"]+  +spectrumWeights8[abortVal[i]]["abort"]
      }
    };
    spectrumWeights8[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights8[7]["fabort"]= spectrumWeights8[7]["fabort"]+  +spectrumWeights8[fabortVal[i]]["fabort"]
      }
    };
    var ax8Total=ax8ImmScore+ spectrumWeights8[sovVal]["sov"]+ spectrumWeights8[autoVal]["auto"]+ spectrumWeights8[govgVal]["govg"]+ spectrumWeights8[govcVal]["govc"]+ spectrumWeights8[syseVal]["syse"]+ spectrumWeights8[syslVal]["sysl"]+ spectrumWeights8[sysjVal]["sysj"]+ spectrumWeights8[relVal]["rel"]+ spectrumWeights8[forPolVal]["for"]+ spectrumWeights8[conscrVal]["cons"]+ spectrumWeights8[righVal]["righ"]+ spectrumWeights8[minwVal]["minw"]+ spectrumWeights8[minw2Val]["minw2"]+ spectrumWeights8[pensregVal]["pensreg"]+ spectrumWeights8[centowVal]["centow"]+ spectrumWeights8[murdVal]["murd"]+ spectrumWeights8[rapeVal]["rape"]+ spectrumWeights8[stealVal]["steal"]+ spectrumWeights8[childVal]["child"]+ spectrumWeights8[defaVal]["defa"]+ spectrumWeights8[incitVal]["incit"]+ spectrumWeights8[prostVal]["stprost"]+ spectrumWeights8[brothVal]["broth"]+ spectrumWeights8[escoVal]["esco"]+ spectrumWeights8[handVal]["hand"]+ spectrumWeights8[shotVal]["shot"]+ spectrumWeights8[rifleVal]["rifle"]+ spectrumWeights8[casinVal]["casin"]+ spectrumWeights8[oncasinVal]["oncasin"]+ spectrumWeights8[sportsVal]["sports"]+ spectrumWeights8[homogenVal]["homogen"]+ spectrumWeights8[homoadVal]["homoad"]+ spectrumWeights8[transgenVal]["transgen"]+ spectrumWeights8[transadVal]["transad"]+ spectrumWeights8[tobusVal]["tobus"]+ spectrumWeights8[tobselVal]["tobsel"]+ spectrumWeights8[alcusVal]["alcus"]+ spectrumWeights8[alcselVal]["alcsel"]+ spectrumWeights8[canusVal]["canus"]+ spectrumWeights8[canselVal]["cansel"]+ spectrumWeights8[psyusVal]["psyus"]+ spectrumWeights8[psyselVal]["psysel"]+ spectrumWeights8[stiusVal]["stius"]+ spectrumWeights8[stiselVal]["stisel"]+ spectrumWeights8[opiusVal]["opius"]+ spectrumWeights8[opiselVal]["opisel"]+ spectrumWeights8[euthVal]["euth"]+ spectrumWeights8[obscVal]["obsc"]+ spectrumWeights8[warcVal]["warc"]+ spectrumWeights8[corfVal]["corf"]+ spectrumWeights8[blasphVal]["blasph"]+ spectrumWeights8[treasVal]["treas"]+ spectrumWeights8[embeVal]["embe"]+ spectrumWeights8[misceVal]["misce"]+ spectrumWeights8[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights8[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights8[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights8[2]["inher"]+ (reservVal/ 100)* spectrumWeights8[2]["reserv"]+ (poverVal/ 100)* spectrumWeights8[2]["pover"]+ (unempVal/ 100)* spectrumWeights8[2]["unemp"]+ (pensVal/ 100)* spectrumWeights8[2]["pens"]+ (minincVal/ 100)* spectrumWeights8[2]["mininc"]+ (basincVal/ 100)* spectrumWeights8[2]["basinc"]+ (wastVal/ 100)* spectrumWeights8[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights8[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights8[2]["conser"]+ (solarVal/ 100)* spectrumWeights8[2]["solar"]+ (nuclVal/ 100)* spectrumWeights8[2]["nucl"]+ (rndVal/ 100)* spectrumWeights8[2]["rnd"]+ spectrumWeights8[7]["votr"]+ spectrumWeights8[7]["entreq"]+ spectrumWeights8[7]["envreg"]+ spectrumWeights8[7]["womrig"]+ spectrumWeights8[7]["centfun"]+ spectrumWeights8[7]["abort"]+ spectrumWeights8[7]["fabort"] + (spectrumWeights8[survVal] && spectrumWeights8[survVal]["surv"] || 0) + (spectrumWeights8[datapVal] && spectrumWeights8[datapVal]["datap"] || 0) + (spectrumWeights8[encryVal] && spectrumWeights8[encryVal]["encry"] || 0) + (spectrumWeights8[unionVal] && spectrumWeights8[unionVal]["union"] || 0) + (spectrumWeights8[childlabVal] && spectrumWeights8[childlabVal]["childlab"] || 0) + (spectrumWeights8[ippropVal] && spectrumWeights8[ippropVal]["ipprop"] || 0) + (spectrumWeights8[trialVal] && spectrumWeights8[trialVal]["trial"] || 0) + (spectrumWeights8[prisonVal] && spectrumWeights8[prisonVal]["prison"] || 0) + (spectrumWeights8[poloverVal] && spectrumWeights8[poloverVal]["polover"] || 0) + (spectrumWeights8[compulsedVal] && spectrumWeights8[compulsedVal]["compulsed"] || 0) + (spectrumWeights8[religedVal] && spectrumWeights8[religedVal]["religed"] || 0) + (spectrumWeights8[homeschoolVal] && spectrumWeights8[homeschoolVal]["homeschool"] || 0) + (spectrumWeights8[sexedVal] && spectrumWeights8[sexedVal]["sexed"] || 0) + (spectrumWeights8[curriculumVal] && spectrumWeights8[curriculumVal]["curriculum"] || 0) + (spectrumWeights8[healthsysVal] && spectrumWeights8[healthsysVal]["healthsys"] || 0) + (spectrumWeights8[mentalhVal] && spectrumWeights8[mentalhVal]["mentalh"] || 0) + (spectrumWeights8[vaccVal] && spectrumWeights8[vaccVal]["vacc"] || 0) + (spectrumWeights8[marriageVal] && spectrumWeights8[marriageVal]["marriage"] || 0) + (spectrumWeights8[divorceVal] && spectrumWeights8[divorceVal]["divorce"] || 0) + (spectrumWeights8[polygamyVal] && spectrumWeights8[polygamyVal]["polygamy"] || 0) + (spectrumWeights8[ageconsentVal] && spectrumWeights8[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights8[pressfVal] && spectrumWeights8[pressfVal]["pressf"] || 0) + (spectrumWeights8[assemblyVal] && spectrumWeights8[assemblyVal]["assembly"] || 0) + (spectrumWeights8[censorVal] && spectrumWeights8[censorVal]["censor"] || 0) + (spectrumWeights8[slaveryVal] && spectrumWeights8[slaveryVal]["slavery"] || 0) + (spectrumWeights8[citizenVal] && spectrumWeights8[citizenVal]["citizen"] || 0) + (spectrumWeights8[deathpenVal] && spectrumWeights8[deathpenVal]["deathpen"] || 0) + (spectrumWeights8[socreditVal] && spectrumWeights8[socreditVal]["socredit"] || 0) + (spectrumWeights8[trialVal] && spectrumWeights8[trialVal]["trial"] || 0) + (spectrumWeights8[prisonVal] && spectrumWeights8[prisonVal]["prison"] || 0) + (spectrumWeights8[poloverVal] && spectrumWeights8[poloverVal]["polover"] || 0) + (spectrumWeights8[unionVal] && spectrumWeights8[unionVal]["union"] || 0) + (spectrumWeights8[childlabVal] && spectrumWeights8[childlabVal]["childlab"] || 0) + (spectrumWeights8[ippropVal] && spectrumWeights8[ippropVal]["ipprop"] || 0) + (spectrumWeights8[housingVal] && spectrumWeights8[housingVal]["housing"] || 0) + (spectrumWeights8[landowVal] && spectrumWeights8[landowVal]["landow"] || 0) + (spectrumWeights8[eminentVal] && spectrumWeights8[eminentVal]["eminent"] || 0) + (spectrumWeights8[homelessVal] && spectrumWeights8[homelessVal]["homeless"] || 0) + (spectrumWeights8[carbpolVal] && spectrumWeights8[carbpolVal]["carbpol"] || 0) + (spectrumWeights8[nucpolVal] && spectrumWeights8[nucpolVal]["nucpol"] || 0) + (spectrumWeights8[animalVal] && spectrumWeights8[animalVal]["animal"] || 0) + (spectrumWeights8[gmoVal] && spectrumWeights8[gmoVal]["gmo"] || 0) + (spectrumWeights8[waterVal] && spectrumWeights8[waterVal]["water"] || 0) + (spectrumWeights8[statemediaVal] && spectrumWeights8[statemediaVal]["statemedia"] || 0) + (spectrumWeights8[langpolVal] && spectrumWeights8[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights8[hatespeechVal] && spectrumWeights8[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights8[transitVal] && spectrumWeights8[transitVal]["transit"] || 0) + (spectrumWeights8[roadsVal] && spectrumWeights8[roadsVal]["roads"] || 0) + (spectrumWeights8[autodriveVal] && spectrumWeights8[autodriveVal]["autodrive"] || 0) + (spectrumWeights8[spaceVal] && spectrumWeights8[spaceVal]["space"] || 0) + (spectrumWeights8[cryptoVal] && spectrumWeights8[cryptoVal]["crypto"] || 0) + (spectrumWeights8[bankruptVal] && spectrumWeights8[bankruptVal]["bankrupt"] || 0) + (spectrumWeights8[ubitypeVal] && spectrumWeights8[ubitypeVal]["ubitype"] || 0) + (spectrumWeights8[wealthtaxVal] && spectrumWeights8[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights8[statebankVal] && spectrumWeights8[statebankVal]["statebank"] || 0) + (spectrumWeights8[airegulVal] && spectrumWeights8[airegulVal]["airegul"] || 0) + (spectrumWeights8[cloningVal] && spectrumWeights8[cloningVal]["cloning"] || 0) + (spectrumWeights8[stemcellVal] && spectrumWeights8[stemcellVal]["stemcell"] || 0) + (spectrumWeights8[geneditVal] && spectrumWeights8[geneditVal]["genedit"] || 0) + (spectrumWeights8[dataownVal] && spectrumWeights8[dataownVal]["dataown"] || 0) + (spectrumWeights8[taxloopVal] && spectrumWeights8[taxloopVal]["taxloop"] || 0) + (spectrumWeights8[citizenpathVal] && spectrumWeights8[citizenpathVal]["citizenpath"] || 0);
    var ax9ImmDivisor=4;
    var ax9ImmBase=0;
    if(immanVal== 2.5) {
      var ax9ImmDivisor=2.5
    }else  {
      if(immanVal== 0) {
        var ax9ImmBase=spectrumWeights9[0]["imman"]
      }
    };
    var ax9ImmScore=ax9ImmBase+ ((immanVal/ ax9ImmDivisor)* spectrumWeights9[2]["imman"])* ((immstVal/ 100)* spectrumWeights9[2]["immst"]+ (immwoVal/ 100)* spectrumWeights9[2]["immwo"]+ (immasVal/ 100)* spectrumWeights9[2]["immas"]+ (immrefVal/ 100)* spectrumWeights9[2]["immref"]);
    spectrumWeights9[7]["votr"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(votrVal[i]) {
        spectrumWeights9[7]["votr"]= spectrumWeights9[7]["votr"]+  +spectrumWeights9[votrVal[i]]["votr"]
      }
    };
    spectrumWeights9[7]["entreq"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(entreqVal[i]) {
        spectrumWeights9[7]["entreq"]= spectrumWeights9[7]["entreq"]+  +spectrumWeights9[entreqVal[i]]["entreq"]
      }
    };
    spectrumWeights9[7]["envreg"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(envregVal[i]) {
        spectrumWeights9[7]["envreg"]= spectrumWeights9[7]["envreg"]+  +spectrumWeights9[envregVal[i]]["envreg"]
      }
    };
    spectrumWeights9[7]["womrig"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]) {
        spectrumWeights9[7]["womrig"]= spectrumWeights9[7]["womrig"]+  +spectrumWeights9[womrigVal[i]]["womrig"]
      }
    };
    spectrumWeights9[7]["centfun"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(centfunVal[i]) {
        spectrumWeights9[7]["centfun"]= spectrumWeights9[7]["centfun"]+  +spectrumWeights9[centfunVal[i]]["centfun"]
      }
    };
    spectrumWeights9[7]["abort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(abortVal[i]) {
        spectrumWeights9[7]["abort"]= spectrumWeights9[7]["abort"]+  +spectrumWeights9[abortVal[i]]["abort"]
      }
    };
    spectrumWeights9[7]["fabort"]= 0;
    for(i= 0;
    i< 10;
    i++) {
      if(fabortVal[i]) {
        spectrumWeights9[7]["fabort"]= spectrumWeights9[7]["fabort"]+  +spectrumWeights9[fabortVal[i]]["fabort"]
      }
    };

    var ax9Total=ax9ImmScore+ spectrumWeights9[sovVal]["sov"]+ spectrumWeights9[autoVal]["auto"]+ spectrumWeights9[govgVal]["govg"]+ spectrumWeights9[govcVal]["govc"]+ spectrumWeights9[syseVal]["syse"]+ spectrumWeights9[syslVal]["sysl"]+ spectrumWeights9[sysjVal]["sysj"]+ spectrumWeights9[relVal]["rel"]+ spectrumWeights9[forPolVal]["for"]+ spectrumWeights9[conscrVal]["cons"]+ spectrumWeights9[righVal]["righ"]+ spectrumWeights9[minwVal]["minw"]+ spectrumWeights9[minw2Val]["minw2"]+ spectrumWeights9[pensregVal]["pensreg"]+ spectrumWeights9[centowVal]["centow"]+ spectrumWeights9[murdVal]["murd"]+ spectrumWeights9[rapeVal]["rape"]+ spectrumWeights9[stealVal]["steal"]+ spectrumWeights9[childVal]["child"]+ spectrumWeights9[defaVal]["defa"]+ spectrumWeights9[incitVal]["incit"]+ spectrumWeights9[prostVal]["stprost"]+ spectrumWeights9[brothVal]["broth"]+ spectrumWeights9[escoVal]["esco"]+ spectrumWeights9[handVal]["hand"]+ spectrumWeights9[shotVal]["shot"]+ spectrumWeights9[rifleVal]["rifle"]+ spectrumWeights9[casinVal]["casin"]+ spectrumWeights9[oncasinVal]["oncasin"]+ spectrumWeights9[sportsVal]["sports"]+ spectrumWeights9[homogenVal]["homogen"]+ spectrumWeights9[homoadVal]["homoad"]+ spectrumWeights9[transgenVal]["transgen"]+ spectrumWeights9[transadVal]["transad"]+ spectrumWeights9[tobusVal]["tobus"]+ spectrumWeights9[tobselVal]["tobsel"]+ spectrumWeights9[alcusVal]["alcus"]+ spectrumWeights9[alcselVal]["alcsel"]+ spectrumWeights9[canusVal]["canus"]+ spectrumWeights9[canselVal]["cansel"]+ spectrumWeights9[psyusVal]["psyus"]+ spectrumWeights9[psyselVal]["psysel"]+ spectrumWeights9[stiusVal]["stius"]+ spectrumWeights9[stiselVal]["stisel"]+ spectrumWeights9[opiusVal]["opius"]+ spectrumWeights9[opiselVal]["opisel"]+ spectrumWeights9[euthVal]["euth"]+ spectrumWeights9[obscVal]["obsc"]+ spectrumWeights9[warcVal]["warc"]+ spectrumWeights9[corfVal]["corf"]+ spectrumWeights9[blasphVal]["blasph"]+ spectrumWeights9[treasVal]["treas"]+ spectrumWeights9[embeVal]["embe"]+ spectrumWeights9[misceVal]["misce"]+ spectrumWeights9[disseVal]["disse"]+ (mifuVal/ 100)* spectrumWeights9[2]["mifu"]+ (inherMinVal/ 200)* spectrumWeights9[2]["inher"]+ (inherMaxVal/ 200)* spectrumWeights9[2]["inher"]+ (reservVal/ 100)* spectrumWeights9[2]["reserv"]+ (poverVal/ 100)* spectrumWeights9[2]["pover"]+ (unempVal/ 100)* spectrumWeights9[2]["unemp"]+ (pensVal/ 100)* spectrumWeights9[2]["pens"]+ (minincVal/ 100)* spectrumWeights9[2]["mininc"]+ (basincVal/ 100)* spectrumWeights9[2]["basinc"]+ (wastVal/ 100)* spectrumWeights9[2]["wast"]+ (pubpaVal/ 100)* spectrumWeights9[2]["pubpa"]+ (conservVal/ 100)* spectrumWeights9[2]["conser"]+ (solarVal/ 100)* spectrumWeights9[2]["solar"]+ (nuclVal/ 100)* spectrumWeights9[2]["nucl"]+ (rndVal/ 100)* spectrumWeights9[2]["rnd"]+ spectrumWeights9[7]["votr"]+ spectrumWeights9[7]["entreq"]+ spectrumWeights9[7]["envreg"]+ spectrumWeights9[7]["womrig"]+ spectrumWeights9[7]["centfun"]+ spectrumWeights9[7]["abort"]+ spectrumWeights9[7]["fabort"] + (spectrumWeights9[survVal] && spectrumWeights9[survVal]["surv"] || 0) + (spectrumWeights9[datapVal] && spectrumWeights9[datapVal]["datap"] || 0) + (spectrumWeights9[encryVal] && spectrumWeights9[encryVal]["encry"] || 0) + (spectrumWeights9[unionVal] && spectrumWeights9[unionVal]["union"] || 0) + (spectrumWeights9[childlabVal] && spectrumWeights9[childlabVal]["childlab"] || 0) + (spectrumWeights9[ippropVal] && spectrumWeights9[ippropVal]["ipprop"] || 0) + (spectrumWeights9[trialVal] && spectrumWeights9[trialVal]["trial"] || 0) + (spectrumWeights9[prisonVal] && spectrumWeights9[prisonVal]["prison"] || 0) + (spectrumWeights9[poloverVal] && spectrumWeights9[poloverVal]["polover"] || 0) + (spectrumWeights9[compulsedVal] && spectrumWeights9[compulsedVal]["compulsed"] || 0) + (spectrumWeights9[religedVal] && spectrumWeights9[religedVal]["religed"] || 0) + (spectrumWeights9[homeschoolVal] && spectrumWeights9[homeschoolVal]["homeschool"] || 0) + (spectrumWeights9[sexedVal] && spectrumWeights9[sexedVal]["sexed"] || 0) + (spectrumWeights9[curriculumVal] && spectrumWeights9[curriculumVal]["curriculum"] || 0) + (spectrumWeights9[healthsysVal] && spectrumWeights9[healthsysVal]["healthsys"] || 0) + (spectrumWeights9[mentalhVal] && spectrumWeights9[mentalhVal]["mentalh"] || 0) + (spectrumWeights9[vaccVal] && spectrumWeights9[vaccVal]["vacc"] || 0) + (spectrumWeights9[marriageVal] && spectrumWeights9[marriageVal]["marriage"] || 0) + (spectrumWeights9[divorceVal] && spectrumWeights9[divorceVal]["divorce"] || 0) + (spectrumWeights9[polygamyVal] && spectrumWeights9[polygamyVal]["polygamy"] || 0) + (spectrumWeights9[ageconsentVal] && spectrumWeights9[ageconsentVal]["ageconsent"] || 0) + (spectrumWeights9[pressfVal] && spectrumWeights9[pressfVal]["pressf"] || 0) + (spectrumWeights9[assemblyVal] && spectrumWeights9[assemblyVal]["assembly"] || 0) + (spectrumWeights9[censorVal] && spectrumWeights9[censorVal]["censor"] || 0) + (spectrumWeights9[slaveryVal] && spectrumWeights9[slaveryVal]["slavery"] || 0) + (spectrumWeights9[citizenVal] && spectrumWeights9[citizenVal]["citizen"] || 0) + (spectrumWeights9[deathpenVal] && spectrumWeights9[deathpenVal]["deathpen"] || 0) + (spectrumWeights9[socreditVal] && spectrumWeights9[socreditVal]["socredit"] || 0) + (spectrumWeights9[trialVal] && spectrumWeights9[trialVal]["trial"] || 0) + (spectrumWeights9[prisonVal] && spectrumWeights9[prisonVal]["prison"] || 0) + (spectrumWeights9[poloverVal] && spectrumWeights9[poloverVal]["polover"] || 0) + (spectrumWeights9[unionVal] && spectrumWeights9[unionVal]["union"] || 0) + (spectrumWeights9[childlabVal] && spectrumWeights9[childlabVal]["childlab"] || 0) + (spectrumWeights9[ippropVal] && spectrumWeights9[ippropVal]["ipprop"] || 0) + (spectrumWeights9[housingVal] && spectrumWeights9[housingVal]["housing"] || 0) + (spectrumWeights9[landowVal] && spectrumWeights9[landowVal]["landow"] || 0) + (spectrumWeights9[eminentVal] && spectrumWeights9[eminentVal]["eminent"] || 0) + (spectrumWeights9[homelessVal] && spectrumWeights9[homelessVal]["homeless"] || 0) + (spectrumWeights9[carbpolVal] && spectrumWeights9[carbpolVal]["carbpol"] || 0) + (spectrumWeights9[nucpolVal] && spectrumWeights9[nucpolVal]["nucpol"] || 0) + (spectrumWeights9[animalVal] && spectrumWeights9[animalVal]["animal"] || 0) + (spectrumWeights9[gmoVal] && spectrumWeights9[gmoVal]["gmo"] || 0) + (spectrumWeights9[waterVal] && spectrumWeights9[waterVal]["water"] || 0) + (spectrumWeights9[statemediaVal] && spectrumWeights9[statemediaVal]["statemedia"] || 0) + (spectrumWeights9[langpolVal] && spectrumWeights9[langpolVal]["langpol"] || 0) + (artscultVal * 0) + (spectrumWeights9[hatespeechVal] && spectrumWeights9[hatespeechVal]["hatespeech"] || 0) + (spectrumWeights9[transitVal] && spectrumWeights9[transitVal]["transit"] || 0) + (spectrumWeights9[roadsVal] && spectrumWeights9[roadsVal]["roads"] || 0) + (spectrumWeights9[autodriveVal] && spectrumWeights9[autodriveVal]["autodrive"] || 0) + (spectrumWeights9[spaceVal] && spectrumWeights9[spaceVal]["space"] || 0) + (spectrumWeights9[cryptoVal] && spectrumWeights9[cryptoVal]["crypto"] || 0) + (spectrumWeights9[bankruptVal] && spectrumWeights9[bankruptVal]["bankrupt"] || 0) + (spectrumWeights9[ubitypeVal] && spectrumWeights9[ubitypeVal]["ubitype"] || 0) + (spectrumWeights9[wealthtaxVal] && spectrumWeights9[wealthtaxVal]["wealthtax"] || 0) + (spectrumWeights9[statebankVal] && spectrumWeights9[statebankVal]["statebank"] || 0) + (spectrumWeights9[airegulVal] && spectrumWeights9[airegulVal]["airegul"] || 0) + (spectrumWeights9[cloningVal] && spectrumWeights9[cloningVal]["cloning"] || 0) + (spectrumWeights9[stemcellVal] && spectrumWeights9[stemcellVal]["stemcell"] || 0) + (spectrumWeights9[geneditVal] && spectrumWeights9[geneditVal]["genedit"] || 0) + (spectrumWeights9[dataownVal] && spectrumWeights9[dataownVal]["dataown"] || 0) + (spectrumWeights9[taxloopVal] && spectrumWeights9[taxloopVal]["taxloop"] || 0) + (spectrumWeights9[citizenpathVal] && spectrumWeights9[citizenpathVal]["citizenpath"] || 0);

    /* ---------- BUDGET CALCULATIONS ---------- */
    var milSpending=gdpMultiplier* mifuVal/ 100;
    var sciSpending=gdpMultiplier* rndVal/ 100;
    var basicIncSpending=gdpMultiplier* basincVal/ 100;
    var milSpending=Math["easeIn"](milSpending,0,gdpMultiplier,1.8854);
    var enforceMilCost=[0,0.001,0.002,0.004,0.006,0.01,0.015][taxenforceVal]|| 0;
    var paraMilOffset=[1.0,0.995,0.93,0.82,0.70,0.45,0.25][paramilitaryVal]|| 1.0;
    var paraMilCost=[0,0.0003,0.001,0.002,0.003,0.004,0.005][paramilitaryVal]|| 0;
    var moralCost=[0,0.001,0.003,0.005,0.008][moralpoliceVal]|| 0;
    milSpending=milSpending* paraMilOffset+ gdpMultiplier* (enforceMilCost+ paraMilCost+ moralCost);
    var sciSpending=Math["easeIn"](sciSpending,0,gdpMultiplier,1.75);
    if(parseInt(stemcellVal)=== 0) sciSpending=sciSpending* 1.1;
    var basicIncSpending=Math["easeIn"](basicIncSpending,0,gdpMultiplier,1.75);
    var totalGovSpending=0;
    var gdpBoostLookup=[1.0, 1.005, 1.01, 1.02, 1.035, 1.06, 1.10, 1.15, 1.20];
    var loopholeGdpBoost=gdpBoostLookup[taxloopVal]!== undefined? gdpBoostLookup[taxloopVal]: 1.0;
    var wtEconDrag=[0,0.005,0.01,0.02,0.05,0.10,0.15,0.20][wtRateIdx];
    var wtBreadthDrag=[0.1,0.2,0.4,0.6,0.8,1.0][wtThreshVal];
    var wtLoopholeDrag=[1.0,0.95,0.90,0.80,0.70,0.55,0.35,0.20,0.05][taxloopVal];
    var inherMinDrag=inherMinVal> 10? 0.0006* Math.pow(inherMinVal- 10,1.4): 0;
    var inherMaxDrag=inherMaxVal> 30? 0.0002* Math.pow(inherMaxVal- 30,1.3): 0;
    var inherGdpDrag=inherMinDrag+ inherMaxDrag;
    var sectorTaxDrags=[];
    var spilloverTotal=0;
    for(var ci=0;ci<10;ci++){
      var cMin=sectors[ci]["corz"]|| 0,cMax=sectors[ci]["corz2"]|| 0;
      var iMin=sectors[ci]["incz"]|| 0,iMax=sectors[ci]["incz2"]|| 0;
      var cDrag=(cMin> 10? 0.0004* Math.pow(cMin- 10,1.3): 0)+(cMax> 60? 0.0005* Math.pow(cMax- 60,1.2): 0);
      var iDrag=(iMin> 10? 0.0003* Math.pow(iMin- 10,1.3): 0)+(iMax> 60? 0.0004* Math.pow(iMax- 60,1.2): 0);
      var sDrag=cDrag+ iDrag;
      sectorTaxDrags[ci]=sDrag;
      spilloverTotal+=sDrag;
    }
    var spilloverAvg=spilloverTotal/ 10* 0.05;
    var wtGdpPenalty=Math.max(0.5,1- wtEconDrag* wtBreadthDrag* wtLoopholeDrag- wtSquadGdpDrag- inherGdpDrag- spilloverAvg);
    var totalSectorGdp=(eduGdpPct* gdpMultiplier/ 100+ medGdpPct* gdpMultiplier/ 100+ bankGdpPct* gdpMultiplier/ 100+ heaGdpPct* gdpMultiplier/ 100+ retGdpPct* gdpMultiplier/ 100+ manuGdpPct* gdpMultiplier/ 100+ infrGdpPct* gdpMultiplier/ 100+ agrGdpPct* gdpMultiplier/ 100+ reaGdpPct* gdpMultiplier/ 100+ natGdpPct* gdpMultiplier/ 100)* loopholeGdpBoost* wtGdpPenalty;
    var totalGdpWithGov=(eduGdpPct* gdpMultiplier/ 100+ medGdpPct* gdpMultiplier/ 100+ bankGdpPct* gdpMultiplier/ 100+ heaGdpPct* gdpMultiplier/ 100+ retGdpPct* gdpMultiplier/ 100+ manuGdpPct* gdpMultiplier/ 100+ infrGdpPct* gdpMultiplier/ 100+ agrGdpPct* gdpMultiplier/ 100+ natGdpPct* gdpMultiplier/ 100)* loopholeGdpBoost* wtGdpPenalty;
    var envRegSpending=ax8Total* totalSectorGdp* 0.015/ 36.3;
    var immRegSpending=ax9Total* totalSectorGdp* 0.015/ 94.7;
    if(envRegSpending< 0) {
      var envRegSpending=0
    };
    if(immRegSpending< 0) {
      var immRegSpending=0
    };
    var taxEffLookup2=[1.0, 0.99, 0.96, 0.90, 0.85, 0.75, 0.50, 0.30, 0.0];
    var govFundingRate=taxEffLookup2[taxloopVal]!== undefined? taxEffLookup2[taxloopVal]: 1.0;
    var artsCultureSpending=totalSectorGdp* artscultVal/ 100;
    var welfareSpending=(totalSectorGdp* 0.0025* wastVal/ 100+ totalSectorGdp* 0.0005* pubpaVal/ 100+ totalSectorGdp* 0.015* conservVal/ 100+ totalSectorGdp* 0.005* solarVal/ 100+ totalSectorGdp* 0.005* nuclVal/ 100+ totalSectorGdp* 0.02* poverVal/ 100+ totalSectorGdp* 0.08* unempVal/ 100+ totalSectorGdp* 0.125* pensVal/ 100+ totalSectorGdp* 0.08* minincVal/ 100+ basicIncSpending+ milSpending+ sciSpending+ immRegSpending+ artsCultureSpending)* govFundingRate;
    var totalGovSpending=totalSectorGdp+ welfareSpending;
    budgetIncomeConfig["data"]["datasets"][0]["gdpz"]= totalGovSpending;
    budgetSpendConfig["data"]["datasets"][0]["gdpz"]= totalGovSpending;
    $(".gdpnum")["html"]("GDP: $"+ totalGovSpending["toLocaleString"](undefined, {
      maximumFractionDigits:1
    })+ " Bln");
    for(i= 0;
    i< sectors["length"];
    i++) {
      var sectorLoopholeBoost=loopholeGdpBoost;
      if(i== 2) { sectorLoopholeBoost= 1+ (loopholeGdpBoost- 1)* 3.5 }
      if(i== 9) { sectorLoopholeBoost= 1+ (loopholeGdpBoost- 1)* 2.5 }
      if(i== 4) { sectorLoopholeBoost= 1+ (loopholeGdpBoost- 1)* 1.5 }
      sectors[i]["sectgdp"]= sectors[i]["sectgdpprc"]* gdpMultiplier/ 100* sectorLoopholeBoost* wtGdpPenalty
    };
    sectors[10]["sectgdp"]= welfareSpending;
    var sectorAudit=[0.85,0.80,0.60,0.82,0.70,0.92,0.90,0.75,0.88,0.78];
    var sectorCompIds=["educomp","medcomp","bankcomp","heacomp","retcomp","manucomp","infrcomp","agrcomp","natcomp","reacomp"];
    var tlv=parseInt(taxloopVal,10)|| 0;
    var loopholeAbsorb=[0.10,0.20,0.40,0.55,0.70,0.85,0.90,0.85,0.05][tlv]|| 0.4;
    var sqBase=typeof wtSquadBoost==="number"&& !isNaN(wtSquadBoost)? wtSquadBoost: 1.0;
    for(var sc=0;sc<10;sc++) {
      var cAvg=((sectors[sc]["corz"]|| 0)+(sectors[sc]["corz2"]|| 0))/ 2;
      var iAvg=((sectors[sc]["incz"]|| 0)+(sectors[sc]["incz2"]|| 0))/ 2;
      var cnsR=sectors[sc]["consz"]|| 0;
      var tAvg=((sectors[sc]["impz"]|| 0)+(sectors[sc]["expz"]|| 0))/ 2;
      var cP=cAvg> 10? 0.004* Math.pow(cAvg- 10,1.25): 0;
      var iP=iAvg> 10? 0.003* Math.pow(iAvg- 10,1.25): 0;
      var cnP=cnsR> 8? 0.002* Math.pow(cnsR- 8,1.2): 0;
      var tP=tAvg> 10? 0.0015* Math.pow(tAvg- 10,1.2): 0;
      var reaP=0;
      if(sc=== 9) {
        var reaAvgTax=(reaLandTaxVal+ reaPropTaxVal+ reaRentTaxVal+ reaSalesTaxVal)/ 4;
        reaP=reaAvgTax> 8? 0.003* Math.pow(reaAvgTax- 8,1.25): 0;
      }
      var totalP=cP+ iP+ cnP+ tP+ reaP;
      var fraudP=totalP* (1- loopholeAbsorb);
      var auditPen=2.0- sectorAudit[sc];
      var effFraud=fraudP* auditPen;
      var baseComp=Math.max(0.05,1.0- effFraud);
      var enfPush=1+(sqBase- 1)* (enforceLeverage|| 1)* sectorAudit[sc];
      var sCompPct=Math.min(98,Math.round(baseComp* enfPush* 100));
      if(isNaN(sCompPct)) sCompPct= 0;
      if(tlv>= 8) sCompPct= Math.min(sCompPct,5);
      $("#"+ sectorCompIds[sc])["slider"]("value",sCompPct);
      $("."+ sectorCompIds[sc])["html"]("Tax Compliance: "+ sCompPct+ "%");
    }
    for(i= 0;
    i< sectors["length"];
    i++) {
      if(sectors[i]["prcx"]< 0) {
        sectors[i]["owfun1"]= sectors[i]["ownz"]* (Math["abs"](sectors[i]["prcx"])/ 100);
        sectors[i]["owfun2"]= sectors[i]["ownz"]- sectors[i]["ownz"]* (Math["abs"](sectors[i]["prcx"])/ 100)
      }else  {
        sectors[i]["owfun1"]= 0;
        sectors[i]["owfun2"]= sectors[i]["ownz"]
      };
      sectors[i]["owfun4"]= (100- sectors[i]["ownz"])- sectors[i]["funz"]* (100- sectors[i]["ownz"])/ 100;
      sectors[i]["owfun3"]= sectors[i]["funz"]* (100- sectors[i]["ownz"])/ 100
    };
    if(reaSellPriceVal< 0) {
      sectors[9]["owfun1"]= reaOwVal* (Math["abs"](reaSellPriceVal)/ 100);
      sectors[9]["owfun2"]= reaOwVal- reaOwVal* (Math["abs"](reaSellPriceVal)/ 100)
    }else  {
      sectors[9]["owfun1"]= 0;
      sectors[9]["owfun2"]= reaOwVal
    };
    sectors[9]["owfun4"]= (100- reaOwVal)- reaSubsidyVal* (100- reaOwVal)/ 100;
    sectors[9]["owfun3"]= reaSubsidyVal* (100- reaOwVal)/ 100;
    var sectorTaxIncome=0;
    var sectorCorpTax=0;
    var sectorIncTax=0;
    var sectorConsTax=0;
    for(i= 0;
    i< sectors["length"]- 1;
    i++) {
      var sectorTaxIncome=sectorTaxIncome+ sectors[i]["owfun1"]* sectors[i]["sectgdp"]/ totalSectorGdp;
      var sectorCorpTax=sectorCorpTax+ sectors[i]["owfun2"]* sectors[i]["sectgdp"]/ totalSectorGdp;
      var sectorIncTax=sectorIncTax+ sectors[i]["owfun3"]* sectors[i]["sectgdp"]/ totalSectorGdp;
      var sectorConsTax=sectorConsTax+ sectors[i]["owfun4"]* sectors[i]["sectgdp"]/ totalSectorGdp
    };
    var sectorImpTariff=0;
    var sectorExpTariff=0;
    var inherTaxIncome=0;
    var deathRateAdj=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var sectorImpTariff=sectorImpTariff+ sectors[i]["owfun1"]* sectors[i]["sectgdp"]/ totalGdpWithGov;
      var sectorExpTariff=sectorExpTariff+ sectors[i]["owfun2"]* sectors[i]["sectgdp"]/ totalGdpWithGov;
      var inherTaxIncome=inherTaxIncome+ sectors[i]["owfun3"]* sectors[i]["sectgdp"]/ totalGdpWithGov;
      var deathRateAdj=deathRateAdj+ sectors[i]["owfun4"]* sectors[i]["sectgdp"]/ totalGdpWithGov
    };
    var pubIndustryIncome=0;
    var totalBudgetIncome=0;
    var totalBudgetSpend=0;
    var budgetBalance=0;
    var balancePctGdp=0;
    var incomePctGdp=0;
    var spendPctGdp=0;
    var sectorOwnership=0;
    var sectorSubsidy=0;
    var sectorCorpTaxMin=0;
    var sectorCorpTaxMax=0;
    var sectorIncTaxMin=0;
    var sectorIncTaxMax=0;
    var sectorCorpTaxMin=0;
    var sectorConsTaxRate=0;
    var sectorImpRate=0;
    var sectorExpRate=0;
    var reaLandTaxIncome=totalBudgetSpend+ pubIndustryIncome+ spendPctGdp;
    var reaLandTaxIncome=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var reaLandTaxIncome=reaLandTaxIncome+ (((sectors[i]["labco"]+ sectors[i]["matco"]+ sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["ownz"])/ 100))* ((sectors[i]["prcx"]+ 100)/ 100)
    };
    var reaPropTaxIncome=((sectors[0]["labco"]+ sectors[0]["matco"])* sectors[0]["sectgdp"])* (sectors[0]["owfun1"]+ sectors[0]["owfun3"])/ 100+ ((sectors[0]["labco"]* ((sectors[0]["wagx"]+ 100)/ 100)+ sectors[0]["matco"])* sectors[0]["sectgdp"])* (sectors[0]["owfun1"])/ 100;
    var reaRentTaxIncome=((sectors[3]["labco"]+ sectors[3]["matco"])* sectors[3]["sectgdp"])* (sectors[3]["owfun1"]+ sectors[3]["owfun3"])/ 100+ ((sectors[3]["labco"]* ((sectors[3]["wagx"]+ 100)/ 100)+ sectors[3]["matco"])* sectors[3]["sectgdp"])* (sectors[3]["owfun1"])/ 100;
    var reaSalesTaxIncome=0;
    var reaSalesTaxIncome=reaSalesTaxIncome+ ((sectors[0]["labco"]* ((sectors[0]["wagx"]+ 100)/ 100)+ sectors[0]["matco"])* sectors[0]["sectgdp"])* (sectors[0]["owfun2"])/ 100;
    var fmtIncome=0;
    var fmtIncome=fmtIncome+ ((sectors[3]["labco"]* ((sectors[3]["wagx"]+ 100)/ 100)+ sectors[3]["matco"])* sectors[3]["sectgdp"])* (sectors[3]["owfun2"])/ 100;
    var fmtSpending=0;
    for(i= 1;
    i< sectors["length"]- 2;
    i++) {
      if(i=== 3) {
        continue
      };
      var fmtSpending=fmtSpending+ ((sectors[i]["labco"]* ((sectors[i]["wagx"]+ 100)/ 100)+ sectors[i]["matco"])* sectors[i]["sectgdp"])* (sectors[i]["ownz"])/ 100
    };
    var fmtBalance=0;
    for(i= 1;
    i< sectors["length"]- 2;
    i++) {
      if(i=== 3) {
        continue
      };
      var fmtBalance=fmtBalance+ ((sectors[i]["labco"]+ sectors[i]["matco"])* sectors[i]["sectgdp"])* (sectors[i]["owfun3"])/ 100
    };
    var fmtGdp=fmtSpending+ fmtBalance+ reaSalesTaxIncome+ fmtIncome;
    var totalSectorOwValue=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var sectorPrivateRevenue=(((sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100));
      var sectorPrivateBase=((sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100);
      sectors[i]["cortx"]= ((sectorPrivateBase- sectorPrivateRevenue)* (sectors[i]["corz"]/ 200))+ ((sectorPrivateBase- sectorPrivateRevenue)* (sectors[i]["corz2"]/ 200));
      var sectorOwnership=sectorOwnership+ sectors[i]["cortx"]
    };
    var sectorSubsidy=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var sectorSubsidy=sectorSubsidy+ (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)- (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100)))* (sectors[i]["incz"]/ 200)+ (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)- (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100)))* (sectors[i]["incz2"]/ 200)
    };
    var incomePctGdp=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      sectors[i]["constx"]= sectors[i]["inctx"]* (sectors[i]["consz"]/ 100)
    };
    for(i= 0;
    i< sectors["length"];
    i++) {
      var incomePctGdp=incomePctGdp+ (((sectors[i]["labco"]+ sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100))
    };
    var sectorCorpTaxMin=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      sectors[i]["exptx"]= (((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)- ((((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["corz"]/ 100))/ 2+ (((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["corz2"]/ 100))/ 2))* (sectors[i]["expz"]/ 150)
    };
    for(i= 0;
    i< sectors["length"];
    i++) {
      var sectorCorpTaxMin=sectorCorpTaxMin+ sectors[i]["exptx"]
    };
    var sectorCorpTaxMax=0;
    for(i= 1;
    i< sectors["length"];
    i++) {
      var sectorCorpTaxMax=sectorCorpTaxMax+ ((sectors[i]["matco"]* 0.25* sectors[i]["impz"]/ 150)* sectors[i]["sectgdp"])* (sectors[i]["owfun4"])/ 100
    };
    var sectorIncTaxMin=0;
    for(i= 1;
    i< sectors["length"];
    i++) {
      var sectorIncTaxMin=sectorIncTaxMin+ ((sectors[i]["matco"]* 0.25)* sectors[i]["sectgdp"])* (sectors[i]["owfun4"])/ 100
    };
    var sectorIncTaxMax=(sectorCorpTaxMax* 100/ sectorIncTaxMin)* (sectorIncTax+ sectorConsTax)/ 100;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var sectorPublicRevenue=(((sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100));
      var sectorCombinedBase=((sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100);
      var totalSectorOwValue=totalSectorOwValue+ sectorCombinedBase- sectorPublicRevenue
    };
    if(totalSectorOwValue!= 0) {
      var inherOwWeight=Math["round"](sectorOwnership* (inherTaxIncome+ deathRateAdj)* 1.5/ totalSectorOwValue)
    }else  {
      var inherOwWeight=0
    };
    var totalSectorFundWeight=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var totalSectorFundWeight=totalSectorFundWeight+ (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)- (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100)))* (100/ 200)+ (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)- (((sectors[i]["labco"])* sectors[i]["sectgdp"]* (sectors[i]["owfun4"])/ 100)* (sectors[i]["consz"]* 0.9/ 100)))* (100/ 200)
    };
    if(totalSectorFundWeight!= 0) {
      var inherFundWeight=Math["round"](sectorSubsidy* (inherTaxIncome+ deathRateAdj)/ totalSectorFundWeight)
    }else  {
      var inherFundWeight=0
    };
    var totalSectorIncWeight=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var totalSectorIncWeight=totalSectorIncWeight+ (((sectors[i]["labco"]+ sectors[i]["locpro"]+ sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100)* (100* 0.9/ 100))
    };
    if(totalSectorIncWeight!= 0) {
      var inherIncWeight=Math["round"](incomePctGdp* (deathRateAdj)/ totalSectorIncWeight+ incomePctGdp* (inherTaxIncome)/ totalSectorIncWeight)
    }else  {
      var inherIncWeight=0
    };
    var totalSectorCorpWeight=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var totalSectorCorpWeight=totalSectorCorpWeight+ (((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100)- ((((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100)* (sectors[i]["corz"]/ 100))/ 2+ (((sectors[i]["expro"])* sectors[i]["sectgdp"]* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100)* (sectors[i]["corz2"]/ 100))/ 2))
    };
    if(totalSectorCorpWeight!= 0) {
      var inherCorpWeight=Math["round"](sectorCorpTaxMin* (deathRateAdj)/ totalSectorCorpWeight)
    }else  {
      var inherCorpWeight=0
    };
    var totalSectorMatWeight=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var totalSectorMatWeight=totalSectorMatWeight+ ((sectors[i]["matco"]* 0.25* 150/ 150)* sectors[i]["sectgdp"])* (sectors[i]["owfun3"]+ sectors[i]["owfun4"])/ 100
    };
    if(totalSectorMatWeight!= 0) {
      var inherMatWeight=Math["round"](sectorCorpTaxMax* (inherTaxIncome+ deathRateAdj)/ totalSectorMatWeight)
    }else  {
      var inherMatWeight=0
    };
    var totalSectorLabWeight=0;
    var totalSectorLabAdj=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var totalSectorLabWeight=totalSectorLabWeight+ (100* sectors[i]["sectgdp"]);
      var totalSectorLabAdj=totalSectorLabAdj+ (sectors[i]["funz"]* sectors[i]["sectgdp"])
    };
    if(totalSectorLabWeight!= 0) {
      var inherLabWeight=Math["round"](totalSectorLabAdj* (inherTaxIncome+ deathRateAdj)/ totalSectorLabWeight)
    }else  {
      var inherLabWeight=0
    };
    var inheritanceTaxTotal=Math["round"]((inherOwWeight+ (100- inherLabWeight)* inherFundWeight/ 100+ (100- inherOwWeight)* inherCorpWeight* 0.005+ (100- inherLabWeight)* inherMatWeight* 0.005)* 0.65/ 3+ inherLabWeight* 0.65+ inherIncWeight* 0.35)["toLocaleString"](5);
    var totalSectorGdpPrc=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var totalSectorGdpPrc=totalSectorGdpPrc+ (sectors[i]["sectgdp"]* sectors[i]["ownz"])/ 100
    };
    var totalSectorGdpWag=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var totalSectorGdpWag=totalSectorGdpWag+ (sectors[i]["sectgdp"]* sectors[i]["ownz"])/ 100* (Math["abs"](sectors[i]["prcx"])/ 100)
    };
    if(totalSectorGdpPrc!= 0) {
      var pricingAdjustment=totalSectorGdpWag* (sectorTaxIncome+ sectorCorpTax)/ totalSectorGdpPrc
    }else  {
      var pricingAdjustment=0
    };
    var wageAdjBase=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      if(sectors[i]["wagx"]< 0) {
        var wageMultiplier=sectors[i]["wagx"]* 1.7
      }else  {
        var wageMultiplier=sectors[i]["wagx"]
      };
      var wageAdjBase=wageAdjBase+ (sectors[i]["sectgdp"]* sectors[i]["ownz"])/ 100* (Math["abs"](wageMultiplier)/ 100)
    };
    if(totalSectorGdpPrc!= 0) {
      var wageAdjustment=wageAdjBase* (sectorTaxIncome+ sectorCorpTax)/ totalSectorGdpPrc
    }else  {
      var wageAdjustment=0
    };
    var wageRatioBase=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      if(sectors[i]["wagrx"]< 0) {
        var wageRatioMult=sectors[i]["wagrx"]* 4
      }else  {
        var wageRatioMult=sectors[i]["wagrx"]
      };
      var wageRatioBase=wageRatioBase+ (sectors[i]["sectgdp"]* sectors[i]["ownz"])* ((sectors[i]["wagx"]+ 100)/ 200)/ 100* (Math["abs"](wageRatioMult)/ 400)
    };
    if(totalSectorGdpPrc!= 0) {
      var wageRatioAdj=wageRatioBase* (sectorTaxIncome+ sectorCorpTax)/ totalSectorGdpPrc
    }else  {
      var wageRatioAdj=0
    };
    var publicSectorCost=Math["round"]((pricingAdjustment* 1.3+ wageAdjustment+ wageRatioAdj* 0.7)* 0.65/ 3+ (sectorTaxIncome+ sectorCorpTax)* 0.35)["toLocaleString"](2);
    var estateRevenue=((inherMinVal/ 100)* 0.024+ (inherMaxVal/ 100)* 0.056)* totalGovSpending;
    var estateMaxRevenue=0.08* totalGovSpending;
    var estateEffRate=estateRevenue* 100/ estateMaxRevenue;
    var wealthTaxRevenue=(wtRatePct/ 100)* wtWealthBase* wtCompliance* totalGovSpending;
    var landTaxRevenue=reaLandTaxVal* totalGovSpending/ 407.9;
    var propTaxRevenue=reaPropTaxVal* totalGovSpending/ 800;
    var rentTaxRevenue=reaRentTaxVal* sectors[9]["sectgdp"]/ 200;
    var salesTaxRevenue=reaSalesTaxVal* sectors[9]["sectgdp"]/ 200;
    var reaSellIncome=(reaSellPriceVal+ 100)* sectors[9]["sectgdp"]/ 200;
    var reaRentIncome=(reaRentPriceVal+ 100)* sectors[9]["sectgdp"]/ 200;
    var reaPrivateTaxTotal=(rentTaxRevenue+ salesTaxRevenue+ landTaxRevenue+ propTaxRevenue)* (1- reaOwVal/ 100);
    var reaPublicIncome=(reaSellIncome+ reaRentIncome)* (reaOwVal/ 100);
    var reaIncomeTotal=reaPrivateTaxTotal+ reaPublicIncome;
    var reaSubsidySpend=reaSubsidyVal* sectors[9]["sectgdp"]/ 100;
    var reaSubsidyPrivate=reaSubsidySpend* (1- reaOwVal/ 100);
    var reaMaxTaxBase=(100* totalGovSpending/ 400+ 100* totalGovSpending/ 900+ 100* sectors[9]["sectgdp"]/ 200+ 100* sectors[9]["sectgdp"]/ 200)* (1- reaOwVal/ 100);
    var reaPriceEffect=(Math["abs"](reaSellPriceVal))* sectors[9]["sectgdp"]/ 100+ (Math["abs"](reaRentPriceVal))* sectors[9]["sectgdp"]/ 100;
    var reaMaxPriceBase=(200)* sectors[9]["sectgdp"]/ 200+ (200)* sectors[9]["sectgdp"]/ 200;
    var reaPriceCostAdj=reaPriceEffect* 100* (reaOwVal/ 100)/ reaMaxPriceBase;
    if(reaOwVal== 100) {
      var reaNetCost=0
    }else  {
      var reaNetCost=reaPrivateTaxTotal* 100* (1- reaOwVal/ 100)/ reaMaxTaxBase
    };
    var corpTaxTotal=reaGdpPct* gdpMultiplier/ 100/ totalSectorGdp;
    var incTaxTotal=(reaPriceCostAdj+ reaNetCost)* corpTaxTotal;
    var consTaxTotal=((parseInt(inheritanceTaxTotal)+ parseInt(publicSectorCost))* (1- corpTaxTotal)+ incTaxTotal)* 0.7+ estateEffRate* 0.08+ ax6Total* 0.22;
    var consTaxTotal=consTaxTotal["toLocaleString"](undefined, {
      maximumFractionDigits:1
    });
    var impTariffTotal=0;
    var expTariffTotal=0;
    var pubIndustryTotal=0;
    var capGainsTax=0;
    for(i= 0;
    i< sectors["length"]- 2;
    i++) {
      var capGainsTax=capGainsTax+ ((sectors[i]["prcx"]+ 100)/ 2)* sectors[i]["sectgdp"]/ totalGdpWithGov;
      var impTariffTotal=impTariffTotal+ ((sectors[i]["wagrx"]+ 99)/ 499)* sectors[i]["sectgdp"]/ totalGdpWithGov;
      var expTariffTotal=expTariffTotal+ ((sectors[i]["wagx"]+ 100)/ 200)* sectors[i]["sectgdp"]/ totalGdpWithGov
    };
    var pubIndustryTotal=impTariffTotal* expTariffTotal* 100;
    var subsidyTotal=pubIndustryTotal/ 2+ capGainsTax/ 2;
    var subsidyTotal=(totalGdpWithGov/ totalSectorGdp)* subsidyTotal;
    var welfarePoverty=((reaSellPriceVal+ 100)/ 4)+ ((reaRentPriceVal+ 100)/ 4);
    var welfarePoverty=welfarePoverty* (1- totalGdpWithGov/ totalSectorGdp);
    var welfareUnemployed=(subsidyTotal+ welfarePoverty)* (sectorTaxIncome+ sectorCorpTax)/ 100;
    var sectorExpRate=0;
    for(i= 0;
    i< sectors["length"];
    i++) {
      var sectorExpRate=sectorExpRate+ (sectors[i]["owfun1"]* sectors[i]["sectgdp"]+ sectors[i]["owfun2"]* sectors[i]["sectgdp"])
    };
    if(sovVal== 3&& sovOwVal== 1) {
      var welfarePension=(sectorExpRate/ totalGovSpending)["toFixed"](1)
    }else  {
      var welfarePension=(sectorExpRate/ totalGovSpending+ welfareSpending* 100/ totalGovSpending)["toFixed"](1)
    };
    if(isNaN(welfarePension)) {
      var welfarePension=0
    };
    var welfareMinIncome=(100- welfarePension)["toFixed"](1);
    var taxEffLookup=[1.0, 0.99, 0.96, 0.90, 0.85, 0.75, 0.50, 0.30, 0.0];
    var taxEfficiency=taxEffLookup[taxloopVal]!== undefined? taxEffLookup[taxloopVal]: 1.0;
    sectorOwnership= sectorOwnership* taxEfficiency;
    sectorSubsidy= sectorSubsidy* taxEfficiency;
    incomePctGdp= incomePctGdp* taxEfficiency;
    sectorCorpTaxMax= sectorCorpTaxMax* taxEfficiency;
    sectorCorpTaxMin= sectorCorpTaxMin* taxEfficiency;
    estateRevenue= estateRevenue* inherCompliance;
    wealthTaxRevenue= wealthTaxRevenue* taxEfficiency;
    reaIncomeTotal= reaPrivateTaxTotal* taxEfficiency+ reaPublicIncome;
    envRegSpending= envRegSpending* taxEfficiency;
    var finesRevenue=0;
    var heavyFines=[[murdVal,1,0.0008],[rapeVal,1,0.0006],[stealVal,1,0.001],[childVal,1,0.0005],[defaVal,1,0.0004],[incitVal,1,0.0003],[obscVal,1,0.0002],[warcVal,1,0.0003],[corfVal,1,0.0005],[blasphVal,1,0.0001],[treasVal,1,0.0006],[embeVal,1,0.0007],[misceVal,1,0.0002],[disseVal,1,0.0003]];
    var viceFines=[[prostVal,2,0.0002],[brothVal,2,0.0001],[escoVal,2,0.0001],[onprostVal,2,0.0002],[casinVal,2,0.0002],[oncasinVal,2,0.0002],[sportsVal,2,0.0001],[lotteryVal,3,0.0001],[cryptogambVal,2,0.0002],[homogenVal,3,0.0001],[transgenVal,3,0.0001],[polygamyVal,2,0.0001],[surrogVal,3,0.0001]];
    var substFines=[[handVal,4,0.0002],[shotVal,4,0.0001],[rifleVal,4,0.0001],[autoweapVal,4,0.0002],[explosVal,2,0.0002],[concealVal,3,0.0001],[tobusVal,4,0.0001],[tobselVal,3,0.0001],[alcusVal,4,0.0001],[alcselVal,3,0.0001],[canusVal,4,0.0001],[canselVal,3,0.0001],[psyusVal,4,0.0001],[psyselVal,3,0.0001],[stiusVal,4,0.0001],[stiselVal,3,0.0001],[opiusVal,4,0.0001],[opiselVal,3,0.0001]];
    var otherFines=[[cyberVal,1,0.0005],[corruptVal,1,0.0006],[hatespeechVal,3,0.0002]];
    if(moralpenaltyVal=== 2) finesRevenue+= 0.0004* (1+ moralscopeVal)* totalGovSpending;
    heavyFines.concat(viceFines,substFines,otherFines).forEach(function(f){if(parseInt(f[0])===f[1])finesRevenue+=f[2]*totalGovSpending;});
    var incomeGrandTotal=sectorOwnership+ sectorSubsidy+ incomePctGdp+ sectorCorpTaxMax+ sectorCorpTaxMin+ reaLandTaxIncome+ estateRevenue+ wealthTaxRevenue+ reaIncomeTotal+ envRegSpending+ finesRevenue;
    var spendGrandTotal=totalGovSpending* 0.0025* wastVal/ 100+ totalGovSpending* 0.0005* pubpaVal/ 100+ totalGovSpending* 0.015* conservVal/ 100+ totalGovSpending* 0.005* solarVal/ 100+ totalGovSpending* 0.005* nuclVal/ 100;
    var netBalance=totalSectorGdp* 0.02* poverVal/ 100+ totalSectorGdp* 0.08* unempVal/ 100+ totalSectorGdp* 0.125* pensVal/ 100+ totalSectorGdp* 0.08* minincVal/ 100+ basicIncSpending+ reaRentTaxIncome;
    var spendPctGdpCalc=0;
    if(righVal<= 1&& immanVal< 2.5) {
      var spendPctGdpCalc=immanVal* netBalance/ 36
    }else  {
      if(righVal<= 1&& immanVal== 2.5) {
        var spendPctGdpCalc=immanVal* netBalance/ 20
      }
    };
    var netBalance=netBalance+ spendPctGdpCalc;
    var budgetTotal=milSpending+ netBalance+ reaPropTaxIncome+ sciSpending+ spendGrandTotal+ reaSubsidyPrivate+ fmtGdp+ immRegSpending;
    var balanceDisplay=(incomeGrandTotal- budgetTotal)["toFixed"](1);
    var incomePctDisplay=(budgetTotal+ totalBudgetIncome)* 100/ totalGovSpending;
    var spendPctDisplay=(budgetTotal+ totalBudgetIncome- milSpending* 1.3)* 100/ totalGovSpending;
    var spendPctDisplay=Math["easeIn"](spendPctDisplay,0,100,0.765)["toFixed"](1);
    if(isNaN(spendPctDisplay)) {
      var spendPctDisplay=0
    };
    if(spendPctDisplay> 100) {
      var spendPctDisplay=100
    };
    if(spendPctDisplay< 0) {
      var spendPctDisplay=0
    };
    var balPctGdpDisp=(100- spendPctDisplay)["toFixed"](1);
    var sectorConsTaxRate=sectorConsTaxRate* welfareMinIncome/ 100+ parseInt(welfarePension);
    var sectorImpRate=sectorImpRate* welfareMinIncome/ 100+ parseInt(welfarePension);
    if(sovVal== 0) {
      var sectorConsTaxRate=0;
      var sectorImpRate=0
    };
    if(isNaN(sectorConsTaxRate)) {
      var sectorConsTaxRate=100
    };
    if(isNaN(sectorImpRate)) {
      var sectorImpRate=100

    };

    /* ---------- WEALTH TAX + THRESHOLD COMBINED POLITICAL EFFECT ---------- */
    var wtRateIntensity=wtRatePct/ 25;
    var wtCombined=wtRateIntensity* wtThreshBreadth;
    xAxisTotal+= wtCombined* 8;
    yAxisTotal+= wtCombined* -15;
    ax3Total+= wtCombined* 5;
    ax4Total+= wtCombined* -2;
    ax5Total+= wtCombined* 0;
    ax6Total+= wtCombined* 10;
    ax7Total+= wtCombined* 6;
    ax8Total+= wtCombined* 3;
    ax9Total+= wtCombined* 4;

    /* ---------- POLITICAL SPECTRUM DISPLAY ---------- */
    var spectrumX=ax5Total* 0.8+ sectorImpRate* 0.15+ sectorConsTaxRate* 0.05;
    if(xAxisTotal>= 100) {
      var xAxisTotal=100
    };
    if(xAxisTotal< 0) {
      var xAxisTotal=0
    };
    if(yAxisTotal>= 100) {
      var yAxisTotal=100
    };
    if(yAxisTotal< 0) {
      var yAxisTotal=0
    };
    if(ax3Total>= 100) {
      var ax3Total=100
    };
    if(ax3Total< 0) {
      var ax3Total=0
    };
    if(ax4Total>= 100) {
      var ax4Total=100
    };
    if(ax4Total< 0) {
      var ax4Total=0
    };
    if(spectrumX>= 100) {
      var spectrumX=100
    };
    if(spectrumX< 0) {
      var spectrumX=0
    };
    if(consTaxTotal>= 100) {
      var consTaxTotal=100
    };
    if(consTaxTotal< 0) {
      var consTaxTotal=0
    };
    if(incomePctDisplay>= 100) {
      var incomePctDisplay=100
    };
    if(incomePctDisplay< 0) {
      var incomePctDisplay=0
    };
    if(welfarePension>= 100) {
      var welfarePension=100
    };
    if(welfarePension< 0) {
      var welfarePension=0
    };
    var xAxisTotal=Math["easeIn"](xAxisTotal,0,100,0.437)["toFixed"](1);
    var spectrumY=(100- xAxisTotal)["toFixed"](1);

    var yAxisTotal=Math["easeIn"](yAxisTotal,0,100,1.123)["toFixed"](1);

    /* ---------- STRUCTURE & SYSTEM LABEL GENERATION ---------- */
    var structLabel=(100- yAxisTotal)["toFixed"](1);
    var ax3Total=Math["easeIn"](ax3Total,0,100,0.456)["toFixed"](1);
    var sysLabel=(100- ax3Total)["toFixed"](1);
    var ax4Total=Math["easeIn"](ax4Total,0,100,0.92)["toFixed"](1);
    var econLabel=(100- ax4Total)["toFixed"](1);
    var spectrumX=Math["easeIn"](spectrumX,0,100,1.015)["toFixed"](1);
    var socialLabel=(100- spectrumX)["toFixed"](1);
    var consTaxTotal=Math["easeIn"](consTaxTotal,0,100,0.529)["toFixed"](1);
    var avgOwnership=consTaxTotal;
    var avgOwnershipPct=(100- avgOwnership)["toFixed"](1);
    var incomePctDisplay=Math["easeIn"](incomePctDisplay,0,104,0.757)["toFixed"](1);
    var econType=(100- incomePctDisplay)["toFixed"](1);
    var welfarePension=Math["easeIn"](welfarePension,0,104.5,0.773)["toFixed"](1);
    var welfareMinIncome=(100- welfarePension)["toFixed"](1);
    var econModifier=structureLabels[autoVal]["struc1"]+ " "+ structureLabels[govcVal]["struc2"]+ " "+ structureLabels[sovVal]["struc3"];
    if(sovVal== 3&& govcVal== 0) {
      var econModifier=structureLabels[autoVal]["struc4"]
    };
    if(sovVal== 3&& govcVal!= 0) {
      var econModifier=structureLabels[autoVal]["struc1"]+ " "+ structureLabels[govcVal]["struc5"]
    };
    $(".structz")["html"](econModifier);
    var _0xb6a8x13e="";
    var _0xb6a8x13f="-";
    var syslKeys=["dirz","elez","appz","exez","sorz","corpz","relz","herz","milz","algoz"];
    var labelTable=(govgVal== 0)? govSystemLabels: monarchyLabels;
    if(labelTable[syseVal]&& syslKeys[syslVal]) {
      var _0xb6a8x13f=labelTable[syseVal][syslKeys[syslVal]]|| "-"
    };
    if(sysjVal== 0) {
      var _0xb6a8x13e="Populist"
    };
    if(sysjVal== 1|| sysjVal== 2) {
      var _0xb6a8x13e="Constitutional"
    };
    if(sysjVal== 3) {
      var _0xb6a8x13e="Executive"
    };
    if(sysjVal== 4) {
      var _0xb6a8x13e="Tribal"
    };
    if(sysjVal== 5) {
      var _0xb6a8x13e="Theonomic"
    };
    if(sysjVal== 6) {
      var _0xb6a8x13e="Algorithmic"
    };
    if(sysjVal== 7) {
      var _0xb6a8x13e="Corporate"
    };
    if(sysjVal== 8) {
      var _0xb6a8x13e="Martial"
    };
    if(sysjVal== 9) {
      var _0xb6a8x13e="Sortitive"
    };
    if(sysjVal== 10) {
      var _0xb6a8x13e="Dynastic"
    };
    if(syseVal== 0&& syslVal== 3&& sysjVal== 3) {
      var _0xb6a8x13f="Absolute Democracy"
    };
    if(syseVal== 3&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var _0xb6a8x13f="Absolute Hereditary Monarchy"
    };
    if(syseVal== 2&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var _0xb6a8x13f="Absolute Elective Monarchy"
    };
    if(syseVal== 4&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var _0xb6a8x13f="Absolute Military Despotism"
    };
    if(syseVal== 4&& syslVal== 3&& sysjVal== 3&& govgVal== 0) {
      var _0xb6a8x13f="Absolute Military Dictatorship"
    };
    if(syseVal== 6&& syslVal== 5&& govgVal== 0) {
      var _0xb6a8x13f="Corporate Oligarchy"
    };
    if(syseVal== 6&& syslVal== 5&& govgVal== 1) {
      var _0xb6a8x13f="Corporate Despotism"
    };
    if(_0xb6a8x13e== "Theonomic"&& _0xb6a8x13f.indexOf("Theocratic")!= -1) {
      _0xb6a8x13f= _0xb6a8x13f.replace("Theocratic ","");
      _0xb6a8x13e= "Theocratic"
    };
    if(_0xb6a8x13e== "Tribal"&& _0xb6a8x13f.indexOf("Tribal")!= -1) {
      _0xb6a8x13f= _0xb6a8x13f.replace("Tribal ","");
      _0xb6a8x13e= "Tribal"
    };
    if(_0xb6a8x13e== "Algorithmic"&& _0xb6a8x13f.indexOf("Corporate")!= -1) {
      _0xb6a8x13e= "Techno-Corporate";
      _0xb6a8x13f= _0xb6a8x13f.replace("Corporate ","")
    };
    if(_0xb6a8x13e== "Corporate"&& _0xb6a8x13f.indexOf("Corporate")!= -1) {
      _0xb6a8x13f= _0xb6a8x13f.replace("Corporate ","")
    };
    if(_0xb6a8x13f.indexOf("Military")!= -1&& _0xb6a8x13f.indexOf("Military")== 0&& _0xb6a8x13e== "Tribal") {
      _0xb6a8x13e= "Tribal-Military";
      _0xb6a8x13f= _0xb6a8x13f.replace("Military ","")
    };
    $(".structz2")["html"](_0xb6a8x13e+ " "+ _0xb6a8x13f);
    var _0xb6a8x140=(netBalance)* 100/ totalGovSpending;
    var _0xb6a8x141="";
    var _0xb6a8x142="";
    var _0xb6a8x143=(sectors[5]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[5]["ownz"]/ 100);
    var _0xb6a8x144=(sectors[7]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[7]["ownz"]/ 100);
    var _0xb6a8x145=(sectors[9]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[9]["ownz"]/ 100);
    var _0xb6a8x146=(sectors[5]["impz"]- sectors[5]["expz"])/ 3+ 50;
    var _0xb6a8x147=(sectors[7]["impz"]- sectors[7]["expz"])/ 3+ 50;
    var _0xb6a8x148=(sectors[9]["expz"]- sectors[9]["impz"])/ 3+ 50;
    var _0xb6a8x149=_0xb6a8x146* _0xb6a8x143/ 100+ _0xb6a8x147* _0xb6a8x144/ 100+ _0xb6a8x148* _0xb6a8x145/ 100;
    if(sectorIncTaxMax>= 40&& sovVal!= 0) {
      var _0xb6a8x141="Protectionist"
    };
    if(_0xb6a8x149>= 28&& sovVal!= 0) {
      var _0xb6a8x141="Mercantilist"
    };
    if(centfunVal[0]&& centfunVal[1]&& centfunVal[2]&& centowVal== 0&& _0xb6a8x149>= 31&& sovVal!= 0) {
      var _0xb6a8x141="Neomercantilist"
    };
    if((sectorTaxIncome+ sectorCorpTax)>= 68&& sectorTaxIncome>= 34) {
      var _0xb6a8x142="Socialism"
    };
    if(publicSectorCost<= 50&& (sectorTaxIncome+ sectorCorpTax)>= 68) {
      var _0xb6a8x142="Market Socialism"
    };
    if(sectorCorpTax>= 68&& welfareUnemployed>= 35) {
      var _0xb6a8x142="State Capitalism"
    };
    if(_0xb6a8x140>= 20&& sectorCorpTax>= 68) {
      var _0xb6a8x142="State Socialism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78) {
      var _0xb6a8x142="Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 68&& sectorIncTax>= 34) {
      var _0xb6a8x142="Subsidized Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78&& inheritanceTaxTotal>= 50) {
      var _0xb6a8x142="Regulatory Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78&& inheritanceTaxTotal<= 10) {
      var _0xb6a8x142="Free Market Capitalism"
    };
    if(_0xb6a8x140>= 20&& sectorConsTax>= 68) {
      var _0xb6a8x142="Welfare Capitalism"
    };
    if(sectorConsTax>= 85&& avgOwnership<= 13&& incomePctDisplay< 20) {
      var _0xb6a8x142="Laissez Faire Capitalism"
    };
    if(sectorConsTax>= 100&& avgOwnership<= 2.5&& incomePctDisplay< 20) {
      var _0xb6a8x142="Ultracapitalism"
    };
    if((sectorTaxIncome+ sectorCorpTax)>= 33&& (sectorIncTax+ sectorConsTax)>= 33&& _0xb6a8x140>= 20&& avgOwnership>= 38&& avgOwnership<= 68) {
      var _0xb6a8x142="Social Market Economy"
    };
    if(((sectorCorpTax>= 70)|| sectorTaxIncome>= 50)&& sovVal== 3&& govgVal== 0&& syseVal<= 0&& syslVal<= 0&& govcVal== 1) {
      var _0xb6a8x142="Mutualism"
    };
    if(_0xb6a8x142== "") {
      var _0xb6a8x142="Mixed Economy"
    };
    if(_0xb6a8x141== "Protectionist"&& _0xb6a8x142== "") {
      var _0xb6a8x141="Protectionism"
    };
    if(_0xb6a8x141== "Mercantilist"&& _0xb6a8x142== "") {
      var _0xb6a8x141="Mercantilism"
    };
    if(_0xb6a8x141== "Neomercantilist"&& _0xb6a8x142== "") {
      var _0xb6a8x141="Neomercantilism"
    };
    $(".structz3")["html"](_0xb6a8x141+ " "+ _0xb6a8x142);
    var _0xb6a8x14a="";
    var _0xb6a8x14b="";
    var _0xb6a8x14c="";
    var _0xb6a8x14d="";
    if(ax3Total<= 38&& disseVal== 0) {
      var _0xb6a8x14a="Liberal"
    };
    if(ax3Total<= 8&& disseVal== 0) {
      var _0xb6a8x14a="Libertarian"
    };
    if(disseVal>= 1|| ax3Total>= 67) {
      var _0xb6a8x14a="Authoritarian"
    };
    var _0xb6a8x14e=0;
    var _0xb6a8x14f=0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]<= 3) {
        var _0xb6a8x14e=_0xb6a8x14e+ 1
      };
      if(syseVal>= 2&& syslVal>= 2&& sysjVal>= 2) {
        var _0xb6a8x14f=1
      }
    };
    if((_0xb6a8x14e+ _0xb6a8x14f)<= 2) {
      var _0xb6a8x14b="Patriarchal"
    };
    if(ax4Total>= 58) {
      var _0xb6a8x14c="Traditionalist"
    };
    if(ax4Total>= 85) {
      var _0xb6a8x14c="Ultratraditionalist"
    };
    if(ax4Total<= 15) {
      var _0xb6a8x14c="Progressive"
    };
    if(spectrumX>= 58) {
      var _0xb6a8x14d="Nativism"
    };
    if(spectrumX>= 71) {
      var _0xb6a8x14d="Nationalism"
    };
    if(spectrumX>= 92) {
      var _0xb6a8x14d="Ultranationalism"
    };
    if(ax5Total<= 34) {
      var _0xb6a8x14d="Cosmopolitanism"
    };
    if(ax7Total== 0&& immanVal>= 1.8) {
      var _0xb6a8x14d="Multiculturalism"
    };
    if(spectrumX<= 3) {
      var _0xb6a8x14d="Globalism"
    };
    if(_0xb6a8x14a== "Authoritarian"&& _0xb6a8x14b== ""&& _0xb6a8x14c== ""&& _0xb6a8x14d== "") {
      var _0xb6a8x14a="Authoritarianism"
    };
    if(_0xb6a8x14a== "Liberal"&& _0xb6a8x14b== ""&& _0xb6a8x14c== ""&& _0xb6a8x14d== "") {
      var _0xb6a8x14a="Liberalism"
    };
    if(_0xb6a8x14a== "Libertarian"&& _0xb6a8x14b== ""&& _0xb6a8x14c== ""&& _0xb6a8x14d== "") {
      var _0xb6a8x14a="Libertarianism"
    };
    if(_0xb6a8x14b== "Patriarchal"&& _0xb6a8x14c== ""&& _0xb6a8x14d== "") {
      var _0xb6a8x14b="Patriarchy"
    };
    if(_0xb6a8x14c== "Traditionalist"&& _0xb6a8x14d== "") {
      var _0xb6a8x14c="Traditionalism"
    };
    if(_0xb6a8x14c== "Ultratraditionalist"&& _0xb6a8x14d== "") {
      var _0xb6a8x14c="Ultratraditionalism"
    };
    if(_0xb6a8x14c== "Progressive"&& _0xb6a8x14d== "") {
      var _0xb6a8x14c="Progressivism"
    };
    if(_0xb6a8x14c== "Modernist"&& _0xb6a8x14d== "") {
      var _0xb6a8x14c="Modernism"
    };
    if(_0xb6a8x14a!= ""&& _0xb6a8x14b!= ""&& _0xb6a8x14c!= ""&& _0xb6a8x14d!= "") {
      $(".structz4")["css"]("font-size","1.2rem")
    }else  {
      $(".structz4")["css"]("font-size","1.35rem")
    };
    $(".structz4")["html"](_0xb6a8x14a+ " "+ _0xb6a8x14b+ " "+ _0xb6a8x14c+ " "+ _0xb6a8x14d);
    if(_0xb6a8x14a== ""&& _0xb6a8x14b== ""&& _0xb6a8x14c== ""&& _0xb6a8x14d== "") {
      $(".structz4")["html"]("-")
    };
    if(sovVal== 4) {
      $["each"](scatterData["datasets"],function(i,dataset) {
        dataset["pointRadius"]= 6;
        dataset["pointHoverRadius"]= 6
      });
      $(".structz")["html"]("Egoist Anarchism");
      $(".structz2")["html"]("-");
      $(".structz3")["html"]("-");
      $(".structz4")["html"]("-")
    };
    var sectorPubPct=(milSpending- spendGrandTotal)* 100/ budgetTotal;
    var sectorFunPct=100- ((budgetTotal- milSpending)* 100/ budgetTotal);
    var _0xb6a8x152=(netBalance+ spendGrandTotal- balancePctGdp)* 100/ totalGovSpending;
    var _0xb6a8x153=(sciSpending)* 100/ budgetTotal;
    var _0xb6a8x154=(100- _0xb6a8x153)["toFixed"](1);
    var _0xb6a8x155=(100- _0xb6a8x152)["toFixed"](1);
    var _0xb6a8x156=sectorPubPct+ econType;
    if(_0xb6a8x156>= 100) {
      var _0xb6a8x156=100
    };
    if(isNaN) {
      if(isNaN(sectorPubPct)) {
        var sectorPubPct=0
      }
    };
    if(isNaN(_0xb6a8x154)) {
      var _0xb6a8x154=100
    };
    if(isNaN(_0xb6a8x153)) {
      var _0xb6a8x153=0
    };
    if(isNaN(_0xb6a8x155)) {
      var _0xb6a8x155=100
    };
    if(sovVal== 0) {
      var _0xb6a8x157=1.05
    }else  {
      if(sovVal== 3) {
        var _0xb6a8x157=0.25
      }else  {
        if(sovVal== 2) {
          var _0xb6a8x157=0.85
        }else  {
          var _0xb6a8x157=1
        }
      }
    };
    if(autoVal== 0) {
      var _0xb6a8x158=1.1
    }else  {
      if(autoVal== 1) {
        var _0xb6a8x158=1.05
      }else  {
        if(autoVal== 3) {
          var _0xb6a8x158=0.85
        }else  {
          if(autoVal== 4) {
            var _0xb6a8x158=0.5
          }else  {
            var _0xb6a8x158=1
          }
        }
      }
    };
    if(forPolVal== 4) {
      var _0xb6a8x159=1.05
    }else  {
      var _0xb6a8x159=1
    };
    var _0xb6a8x15a=(sectorIncTax+ sectorConsTax)* 0.2+ balPctGdpDisp* _0xb6a8x159* 0.8;
    var _0xb6a8x15b=yAxisTotal* 0.6+ _0xb6a8x15a* 0.4;
    var _0xb6a8x15b=yAxisTotal* 0.6+ welfareMinIncome* 0.3+ welfareUnemployed* 0.2+ sectorPubPct* 0.2+ (100- consTaxTotal)* 0.1;
    var _0xb6a8x15c=welfarePension* 0.5+ (100- welfareUnemployed)* 0.5+ inheritanceTaxTotal* 0.5;
    var _0xb6a8x15d=100- welfareUnemployed;
    var _0xb6a8x15e=consTaxTotal* 0.8+ sectorFunPct* 0.2;
    var _0xb6a8x15f=xAxisTotal* _0xb6a8x158* 0.6+ _0xb6a8x15e* _0xb6a8x157* 0.4;
    var _0xb6a8x15b=(_0xb6a8x15b)["toFixed"](1);
    var _0xb6a8x15f=(_0xb6a8x15f)["toFixed"](1);
    if(_0xb6a8x15b> 100) {
      var _0xb6a8x15b=100
    };
    if(_0xb6a8x15b< 0) {
      var _0xb6a8x15b=0
    };
    if(_0xb6a8x15f> 100) {
      var _0xb6a8x15f=100
    };
    if(_0xb6a8x15f< 0) {
      var _0xb6a8x15f=0
    };
    var _0xb6a8x160=(100- _0xb6a8x15b)["toFixed"](1);
    var _0xb6a8x161=(100- _0xb6a8x15f)["toFixed"](1);
    var pointX=(_0xb6a8x15b* 2- 100)* 0.732;
    var pointY=(_0xb6a8x15f* 2- 100)* 0.732;
    if(pointX> 73.2) {
      var pointX=73.2
    };
    if(pointY> 73.2) {
      var pointY=73.2
    };
    if(pointX<  -73.2) {
      var pointX=-73.2
    };
    if(pointY<  -73.2) {
      var pointY=-73.2
    };
    var _0xb6a8x164=pointX;
    var _0xb6a8x165=pointY;
    var _0xb6a8x166=0;
    var _0xb6a8x167=0;
    var _0xb6a8x168=104;
    var _0xb6a8x169=0;
    var _0xb6a8x16a=0;
    var _0xb6a8x16b=104;
    var _0xb6a8x16c=((_0xb6a8x169- _0xb6a8x16b)* (_0xb6a8x164- _0xb6a8x16a)+ (_0xb6a8x16a- _0xb6a8x168)* (_0xb6a8x165- _0xb6a8x16b))/ ((_0xb6a8x169- _0xb6a8x16b)* (_0xb6a8x166- _0xb6a8x16a)+ (_0xb6a8x16a- _0xb6a8x168)* (_0xb6a8x167- _0xb6a8x16b));
    var _0xb6a8x16d=((_0xb6a8x16b- _0xb6a8x167)* (_0xb6a8x164- _0xb6a8x16a)+ (_0xb6a8x166- _0xb6a8x16a)* (_0xb6a8x165- _0xb6a8x16b))/ ((_0xb6a8x169- _0xb6a8x16b)* (_0xb6a8x166- _0xb6a8x16a)+ (_0xb6a8x16a- _0xb6a8x168)* (_0xb6a8x167- _0xb6a8x16b));
    var _0xb6a8x16e=1- _0xb6a8x16c- _0xb6a8x16d;
    if(_0xb6a8x16c>= 0&& _0xb6a8x16c<= 1&& _0xb6a8x16d>= 0&& _0xb6a8x16d<= 1&& _0xb6a8x16e>= 0&& _0xb6a8x16e<= 1) {
      var _0xb6a8x16f=1
    }else  {
      var _0xb6a8x16f=0
    };
    var drawX=pointX;
    var drawY=pointY;
    var quadX=0;
    var quadY=0;
    var pointSize=104;
    var _0xb6a8x175=0;
    var _0xb6a8x176=0;
    var _0xb6a8x177=-104;
    var _0xb6a8x178=((_0xb6a8x175- _0xb6a8x177)* (drawX- _0xb6a8x176)+ (_0xb6a8x176- pointSize)* (drawY- _0xb6a8x177))/ ((_0xb6a8x175- _0xb6a8x177)* (quadX- _0xb6a8x176)+ (_0xb6a8x176- pointSize)* (quadY- _0xb6a8x177));
    var _0xb6a8x179=((_0xb6a8x177- quadY)* (drawX- _0xb6a8x176)+ (quadX- _0xb6a8x176)* (drawY- _0xb6a8x177))/ ((_0xb6a8x175- _0xb6a8x177)* (quadX- _0xb6a8x176)+ (_0xb6a8x176- pointSize)* (quadY- _0xb6a8x177));
    var _0xb6a8x17a=1- _0xb6a8x178- _0xb6a8x179;
    if(_0xb6a8x178>= 0&& _0xb6a8x178<= 1&& _0xb6a8x179>= 0&& _0xb6a8x179<= 1&& _0xb6a8x17a>= 0&& _0xb6a8x17a<= 1) {
      var _0xb6a8x17b=1
    }else  {
      var _0xb6a8x17b=0
    };
    var _0xb6a8x17c=pointX;
    var _0xb6a8x17d=pointY;
    var _0xb6a8x17e=0;
    var _0xb6a8x17f=0;
    var lineAx1=-104;
    var lineAy1=0;
    var lineAx2=0;
    var lineAy2=-104;
    var quadrant=((lineAy1- lineAy2)* (_0xb6a8x17c- lineAx2)+ (lineAx2- lineAx1)* (_0xb6a8x17d- lineAy2))/ ((lineAy1- lineAy2)* (_0xb6a8x17e- lineAx2)+ (lineAx2- lineAx1)* (_0xb6a8x17f- lineAy2));
    var _0xb6a8x185=((lineAy2- _0xb6a8x17f)* (_0xb6a8x17c- lineAx2)+ (_0xb6a8x17e- lineAx2)* (_0xb6a8x17d- lineAy2))/ ((lineAy1- lineAy2)* (_0xb6a8x17e- lineAx2)+ (lineAx2- lineAx1)* (_0xb6a8x17f- lineAy2));
    var _0xb6a8x186=1- quadrant- _0xb6a8x185;
    if(quadrant>= 0&& quadrant<= 1&& _0xb6a8x185>= 0&& _0xb6a8x185<= 1&& _0xb6a8x186>= 0&& _0xb6a8x186<= 1) {
      var _0xb6a8x187=1
    }else  {
      var _0xb6a8x187=0
    };
    var lineBx1=pointX;
    var lineBy1=pointY;
    var lineBx2=0;
    var lineBy2=0;
    var lineCx1=-104;
    var lineCy1=0;
    var lineCx2=0;
    var lineCy2=104;
    var intersectDet=((lineCy1- lineCy2)* (lineBx1- lineCx2)+ (lineCx2- lineCx1)* (lineBy1- lineCy2))/ ((lineCy1- lineCy2)* (lineBx2- lineCx2)+ (lineCx2- lineCx1)* (lineBy2- lineCy2));
    var _0xb6a8x191=((lineCy2- lineBy2)* (lineBx1- lineCx2)+ (lineBx2- lineCx2)* (lineBy1- lineCy2))/ ((lineCy1- lineCy2)* (lineBx2- lineCx2)+ (lineCx2- lineCx1)* (lineBy2- lineCy2));
    var _0xb6a8x192=1- intersectDet- _0xb6a8x191;
    if(intersectDet>= 0&& intersectDet<= 1&& _0xb6a8x191>= 0&& _0xb6a8x191<= 1&& _0xb6a8x192>= 0&& _0xb6a8x192<= 1) {
      var _0xb6a8x193=1
    }else  {
      var _0xb6a8x193=0
    };
    var _0xb6a8x194=0;
    var _0xb6a8x195=104;
    var _0xb6a8x196=104;
    var _0xb6a8x197=0;
    var _0xb6a8x198=(pointX+ 104);
    var _0xb6a8x199=(pointY+ 104);
    var _0xb6a8x19a=pointX;
    var _0xb6a8x19b=pointY;
    var _0xb6a8x19c=((_0xb6a8x194* _0xb6a8x197- _0xb6a8x195* _0xb6a8x196)* (_0xb6a8x198- _0xb6a8x19a)- (_0xb6a8x194- _0xb6a8x196)* (_0xb6a8x198* _0xb6a8x19b- _0xb6a8x199* _0xb6a8x19a))/ ((_0xb6a8x194- _0xb6a8x196)* (_0xb6a8x199- _0xb6a8x19b)- (_0xb6a8x195- _0xb6a8x197)* (_0xb6a8x198- _0xb6a8x19a));
    var _0xb6a8x19d=((_0xb6a8x194* _0xb6a8x197- _0xb6a8x195* _0xb6a8x196)* (_0xb6a8x195- _0xb6a8x197)- (_0xb6a8x195- _0xb6a8x197)* (_0xb6a8x198* _0xb6a8x19b- _0xb6a8x199* _0xb6a8x19a))/ ((_0xb6a8x194- _0xb6a8x196)* (_0xb6a8x199- _0xb6a8x19b)- (_0xb6a8x195- _0xb6a8x197)* (_0xb6a8x198- _0xb6a8x19a));
    var _0xb6a8x19e=0;
    var _0xb6a8x19f=-104;
    var borderX=104;
    var borderY=0;
    var clampX=(pointX+ 104);
    var clampY=(pointY- 104);
    var _0xb6a8x1a4=pointX;
    var _0xb6a8x1a5=pointY;
    var _0xb6a8x1a6=((_0xb6a8x19e* borderY- _0xb6a8x19f* borderX)* (clampX- _0xb6a8x1a4)- (_0xb6a8x19e- borderX)* (clampX* _0xb6a8x1a5- clampY* _0xb6a8x1a4))/ ((_0xb6a8x19e- borderX)* (clampY- _0xb6a8x1a5)- (_0xb6a8x19f- borderY)* (clampX- _0xb6a8x1a4));
    var _0xb6a8x1a7=((_0xb6a8x19e* borderY- _0xb6a8x19f* borderX)* (_0xb6a8x19f- borderY)- (_0xb6a8x19f- borderY)* (clampX* _0xb6a8x1a5- clampY* _0xb6a8x1a4))/ ((_0xb6a8x19e- borderX)* (clampY- _0xb6a8x1a5)- (_0xb6a8x19f- borderY)* (clampX- _0xb6a8x1a4));
    var _0xb6a8x1a8=-104;
    var _0xb6a8x1a9=0;
    var _0xb6a8x1aa=0;
    var _0xb6a8x1ab=-104;
    var _0xb6a8x1ac=(pointX+ 104);
    var _0xb6a8x1ad=(pointY+ 104);
    var _0xb6a8x1ae=pointX;
    var _0xb6a8x1af=pointY;
    var _0xb6a8x1b0=((_0xb6a8x1a8* _0xb6a8x1ab- _0xb6a8x1a9* _0xb6a8x1aa)* (_0xb6a8x1ac- _0xb6a8x1ae)- (_0xb6a8x1a8- _0xb6a8x1aa)* (_0xb6a8x1ac* _0xb6a8x1af- _0xb6a8x1ad* _0xb6a8x1ae))/ ((_0xb6a8x1a8- _0xb6a8x1aa)* (_0xb6a8x1ad- _0xb6a8x1af)- (_0xb6a8x1a9- _0xb6a8x1ab)* (_0xb6a8x1ac- _0xb6a8x1ae));
    var _0xb6a8x1b1=((_0xb6a8x1a8* _0xb6a8x1ab- _0xb6a8x1a9* _0xb6a8x1aa)* (_0xb6a8x1a9- _0xb6a8x1ab)- (_0xb6a8x1a9- _0xb6a8x1ab)* (_0xb6a8x1ac* _0xb6a8x1af- _0xb6a8x1ad* _0xb6a8x1ae))/ ((_0xb6a8x1a8- _0xb6a8x1aa)* (_0xb6a8x1ad- _0xb6a8x1af)- (_0xb6a8x1a9- _0xb6a8x1ab)* (_0xb6a8x1ac- _0xb6a8x1ae));
    var _0xb6a8x1b2=-104;
    var _0xb6a8x1b3=0;
    var _0xb6a8x1b4=0;
    var _0xb6a8x1b5=104;
    var _0xb6a8x1b6=(pointX+ 104);
    var _0xb6a8x1b7=(pointY- 104);
    var _0xb6a8x1b8=pointX;
    var _0xb6a8x1b9=pointY;
    var _0xb6a8x1ba=((_0xb6a8x1b2* _0xb6a8x1b5- _0xb6a8x1b3* _0xb6a8x1b4)* (_0xb6a8x1b6- _0xb6a8x1b8)- (_0xb6a8x1b2- _0xb6a8x1b4)* (_0xb6a8x1b6* _0xb6a8x1b9- _0xb6a8x1b7* _0xb6a8x1b8))/ ((_0xb6a8x1b2- _0xb6a8x1b4)* (_0xb6a8x1b7- _0xb6a8x1b9)- (_0xb6a8x1b3- _0xb6a8x1b5)* (_0xb6a8x1b6- _0xb6a8x1b8));
    var _0xb6a8x1bb=((_0xb6a8x1b2* _0xb6a8x1b5- _0xb6a8x1b3* _0xb6a8x1b4)* (_0xb6a8x1b3- _0xb6a8x1b5)- (_0xb6a8x1b3- _0xb6a8x1b5)* (_0xb6a8x1b6* _0xb6a8x1b9- _0xb6a8x1b7* _0xb6a8x1b8))/ ((_0xb6a8x1b2- _0xb6a8x1b4)* (_0xb6a8x1b7- _0xb6a8x1b9)- (_0xb6a8x1b3- _0xb6a8x1b5)* (_0xb6a8x1b6- _0xb6a8x1b8));
    var _0xb6a8x1bc=pointX;
    var _0xb6a8x1bd=pointY;
    if(pointX> 5&& pointY> 5&& _0xb6a8x16f== 0) {
      var _0xb6a8x1bc=_0xb6a8x19c;
      var _0xb6a8x1bd=_0xb6a8x19d
    };
    if(pointX> 5&& pointY<  -5&& _0xb6a8x17b== 0) {
      var _0xb6a8x1bc=_0xb6a8x1a6;
      var _0xb6a8x1bd=_0xb6a8x1a7
    };
    if(pointX<  -5&& pointY<  -5&& _0xb6a8x187== 0) {
      var _0xb6a8x1bc=_0xb6a8x1b0;
      var _0xb6a8x1bd=_0xb6a8x1b1
    };
    if(pointX<  -5&& pointY> 5&& _0xb6a8x193== 0) {
      var _0xb6a8x1bc=_0xb6a8x1ba;
      var _0xb6a8x1bd=_0xb6a8x1bb
    };
    if(sovVal== 4) {
      var _0xb6a8x1bc=0
    };
    if(sovVal== 4) {
      var _0xb6a8x1bd=-83.5
    };
    scatterData["datasets"][0]["data"]= [ {
      x:_0xb6a8x1bc,y:_0xb6a8x1bd
    }, {
      x:100,y:100
    }, {
      x:-100,y:-100
    }, {
      x:-100,y:100
    }, {
      x:100,y:-100
    }];
    budgetIncomeConfig["data"]["datasets"][0]["data"][0]= sectorOwnership;
    budgetIncomeConfig["data"]["datasets"][0]["data"][1]= sectorSubsidy;
    budgetIncomeConfig["data"]["datasets"][0]["data"][2]= incomePctGdp;
    budgetIncomeConfig["data"]["datasets"][0]["data"][3]= sectorCorpTaxMax;
    budgetIncomeConfig["data"]["datasets"][0]["data"][4]= sectorCorpTaxMin;
    budgetIncomeConfig["data"]["datasets"][0]["data"][5]= estateRevenue;
    budgetIncomeConfig["data"]["datasets"][0]["data"][6]= wealthTaxRevenue;
    budgetIncomeConfig["data"]["datasets"][0]["data"][7]= reaIncomeTotal;
    budgetIncomeConfig["data"]["datasets"][0]["data"][8]= reaLandTaxIncome;
    budgetIncomeConfig["data"]["datasets"][0]["data"][9]= envRegSpending+ finesRevenue;
    budgetSpendConfig["data"]["datasets"][0]["data"][0]= milSpending;
    budgetSpendConfig["data"]["datasets"][0]["data"][1]= netBalance;
    budgetSpendConfig["data"]["datasets"][0]["data"][2]= reaPropTaxIncome;
    budgetSpendConfig["data"]["datasets"][0]["data"][3]= sciSpending;
    budgetSpendConfig["data"]["datasets"][0]["data"][4]= spendGrandTotal;
    budgetSpendConfig["data"]["datasets"][0]["data"][5]= reaSubsidyPrivate;
    budgetSpendConfig["data"]["datasets"][0]["data"][6]= fmtGdp;
    budgetSpendConfig["data"]["datasets"][0]["data"][7]= immRegSpending;
    polarConfig["data"]["datasets"][0]["data"][2]= spectrumX;
    polarConfig["data"]["datasets"][0]["data"][10]= socialLabel;
    polarConfig["data"]["datasets"][0]["data"][3]= ax4Total;
    polarConfig["data"]["datasets"][0]["data"][11]= econLabel;
    polarConfig["data"]["datasets"][0]["data"][1]= ax3Total;
    polarConfig["data"]["datasets"][0]["data"][9]= sysLabel;
    polarConfig["data"]["datasets"][0]["data"][5]= econType;
    polarConfig["data"]["datasets"][0]["data"][13]= incomePctDisplay;
    polarConfig["data"]["datasets"][0]["data"][6]= (welfareMinIncome);
    polarConfig["data"]["datasets"][0]["data"][14]= (welfarePension);
    polarConfig["data"]["datasets"][0]["data"][7]= avgOwnershipPct;
    polarConfig["data"]["datasets"][0]["data"][15]= consTaxTotal;
    polarConfig["data"]["labels"][2]= "Nativist: "+ spectrumX+ "%";
    polarConfig["data"]["labels"][10]= "Cosmopolitan: "+ socialLabel+ "%";
    polarConfig["data"]["labels"][3]= "Traditionalist: "+ ax4Total+ "%";
    polarConfig["data"]["labels"][11]= "Modernist: "+ econLabel+ "%";
    polarConfig["data"]["labels"][5]= "Low Spending: "+ econType+ "%";
    polarConfig["data"]["labels"][13]= "High Spending: "+ incomePctDisplay+ "%";
    polarConfig["data"]["labels"][1]= "Authoritarian: "+ ax3Total+ "%";
    polarConfig["data"]["labels"][9]= "Liberal: "+ sysLabel+ "%";
    polarConfig["data"]["labels"][6]= "Privatization: "+ (welfareMinIncome)+ "%";
    polarConfig["data"]["labels"][14]= "Nationalization: "+ (welfarePension)+ "%";
    polarConfig["data"]["labels"][7]= "Deregulations: "+ avgOwnershipPct+ "%";
    polarConfig["data"]["labels"][15]= "Regulations: "+ consTaxTotal+ "%";
    polarConfig["data"]["datasets"][0]["data"][0]= _0xb6a8x15f;
    polarConfig["data"]["datasets"][0]["data"][8]= _0xb6a8x161;
    polarConfig["data"]["datasets"][0]["data"][4]= _0xb6a8x15b;
    polarConfig["data"]["datasets"][0]["data"][12]= _0xb6a8x160;
    polarConfig["data"]["labels"][0]= "Statism: "+ _0xb6a8x15f+ "%";
    polarConfig["data"]["labels"][8]= "Minarchism: "+ _0xb6a8x161+ "%";
    polarConfig["data"]["labels"][4]= "Right: "+ _0xb6a8x15b+ "%";
    polarConfig["data"]["labels"][12]= "Left: "+ _0xb6a8x160+ "%";
    if(sovVal== 4) {
      polarConfig["data"]["datasets"][0]["data"][2]= 0;
      polarConfig["data"]["datasets"][0]["data"][10]= 0;
      polarConfig["data"]["datasets"][0]["data"][3]= 0;
      polarConfig["data"]["datasets"][0]["data"][11]= 0;
      polarConfig["data"]["datasets"][0]["data"][1]= 0;
      polarConfig["data"]["datasets"][0]["data"][9]= 0;
      polarConfig["data"]["datasets"][0]["data"][5]= 0;
      polarConfig["data"]["datasets"][0]["data"][13]= 0;
      polarConfig["data"]["datasets"][0]["data"][6]= 0;
      polarConfig["data"]["datasets"][0]["data"][14]= 0;
      polarConfig["data"]["datasets"][0]["data"][7]= 0;
      polarConfig["data"]["datasets"][0]["data"][15]= 0;
      polarConfig["data"]["labels"][2]= "Nativist: "+ 0+ "%";
      polarConfig["data"]["labels"][10]= "Cosmopolitan: "+ 0+ "%";
      polarConfig["data"]["labels"][3]= "Traditionalist: "+ 0+ "%";
      polarConfig["data"]["labels"][11]= "Modernist: "+ 0+ "%";
      polarConfig["data"]["labels"][5]= "Low Spending: "+ 0+ "%";
      polarConfig["data"]["labels"][13]= "High Spending: "+ 0+ "%";
      polarConfig["data"]["labels"][1]= "Authoritarian: "+ 0+ "%";
      polarConfig["data"]["labels"][9]= "Liberal: "+ 0+ "%";
      polarConfig["data"]["labels"][6]= "Privatization: "+ 0+ "%";
      polarConfig["data"]["labels"][14]= "Nationalization: "+ 0+ "%";
      polarConfig["data"]["labels"][7]= "Deregulations: "+ 0+ "%";
      polarConfig["data"]["labels"][15]= "Regulations: "+ 0+ "%";
      polarConfig["data"]["datasets"][0]["data"][0]= 0;
      polarConfig["data"]["datasets"][0]["data"][8]= 0;
      polarConfig["data"]["datasets"][0]["data"][4]= 0;
      polarConfig["data"]["datasets"][0]["data"][12]= 0;
      polarConfig["data"]["labels"][0]= "Statism: "+ 0+ "%";
      polarConfig["data"]["labels"][8]= "Minarchism: "+ 0+ "%";
      polarConfig["data"]["labels"][4]= "Right: "+ 0+ "%";
      polarConfig["data"]["labels"][12]= "Left: "+ 0+ "%"
    };
    for(var i=0;
    i< 10;
    i++) {
      var sTaxPen=Math.max(0.3,1- sectorTaxDrags[i]- (spilloverTotal- sectorTaxDrags[i])/ 9* 0.05);
      var pubGdp=(sectors[i]["owfun1"]+ sectors[i]["owfun2"])* sectors[i]["sectgdp"]/ 100;
      var subGdp=sectors[i]["owfun3"]* sectors[i]["sectgdp"]/ 100;
      var privGdp=sectors[i]["owfun4"]* sectors[i]["sectgdp"]/ 100* sTaxPen;
      sectorChartConfig["datasets"][0]["data"][i+ 1]= sectors[i]["owfun1"]* sectors[i]["sectgdp"]/ 100;
      sectorChartConfig["datasets"][1]["data"][i+ 1]= sectors[i]["owfun2"]* sectors[i]["sectgdp"]/ 100;
      sectorChartConfig["datasets"][2]["data"][i+ 1]= subGdp;
      sectorChartConfig["datasets"][3]["data"][i+ 1]= privGdp;
      sectors[i]["effgdp"]= pubGdp+ subGdp+ privGdp
    };
    sectorChartConfig["datasets"][1]["data"][0]= 0;
    sectorChartConfig["datasets"][2]["data"][0]= 0;
    if(sovVal== 3&& sovOwVal== 1) {
      sectorChartConfig["datasets"][3]["data"][0]= welfareSpending;
      sectorChartConfig["datasets"][0]["data"][0]= 0
    }else  {
      if(sovVal== 4) {
        for(var i=0;
        i< 10;
        i++) {
          sectorChartConfig["datasets"][0]["data"][i+ 1]= 0;
          sectorChartConfig["datasets"][1]["data"][i+ 1]= 0;
          sectorChartConfig["datasets"][2]["data"][i+ 1]= 0;
          sectorChartConfig["datasets"][3]["data"][i+ 1]= 0
        };
        sectorChartConfig["datasets"][0]["data"][0]= 0;
        sectorChartConfig["datasets"][3]["data"][0]= 0
      }else  {
        sectorChartConfig["datasets"][0]["data"][0]= welfareSpending;
        sectorChartConfig["datasets"][3]["data"][0]= 0
      }
    };
    if($("#budsect")["val"]()== 0) {
      sectorChartConfig["labels"][0]= "Government: $"+ (welfareSpending)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][1]= "Education: $"+ (sectors[0]["effgdp"]|| sectors[0]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][2]= "Media: $"+ (sectors[1]["effgdp"]|| sectors[1]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][3]= "Finance: $"+ (sectors[2]["effgdp"]|| sectors[2]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][4]= "Healthcare: $"+ (sectors[3]["effgdp"]|| sectors[3]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][5]= "Retail: $"+ (sectors[4]["effgdp"]|| sectors[4]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][6]= "Manufacturing: $"+ (sectors[5]["effgdp"]|| sectors[5]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][7]= "Construction: $"+ (sectors[6]["effgdp"]|| sectors[6]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][8]= "Agriculture: $"+ (sectors[7]["effgdp"]|| sectors[7]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][9]= "Natural Resources: $"+ (sectors[8]["effgdp"]|| sectors[8]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      sectorChartConfig["labels"][10]= "Real Estate: $"+ (sectors[9]["effgdp"]|| sectors[9]["sectgdp"])["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln"
    }else  {
      if($("#budsect")["val"]()== 1) {
        sectorChartConfig["labels"][0]= "Government: "+ (welfareSpending* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "% of GDP";
        sectorChartConfig["labels"][1]= "Education: "+ (sectors[0]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][2]= "Media: "+ (sectors[1]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][3]= "Finance: "+ (sectors[2]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][4]= "Healthcare: "+ (sectors[3]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][5]= "Retail: "+ (sectors[4]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][6]= "Manufacturing: "+ (sectors[5]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][7]= "Construction: "+ (sectors[6]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][8]= "Agriculture: "+ (sectors[7]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][9]= "Natural Resources: "+ (sectors[8]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        sectorChartConfig["labels"][10]= "Real Estate: "+ (sectors[9]["sectgdp"]* 100/ totalGovSpending)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%"
      }
    };
    if(sovVal== 4) {
      sectorChartConfig["labels"][0]= "Government: 0";
      sectorChartConfig["labels"][1]= "Education: 0";
      sectorChartConfig["labels"][2]= "Media: 0";
      sectorChartConfig["labels"][3]= "Finance: 0";
      sectorChartConfig["labels"][4]= "Healthcare: 0";
      sectorChartConfig["labels"][5]= "Retail: 0";
      sectorChartConfig["labels"][6]= "Manufacturing: 0";
      sectorChartConfig["labels"][7]= "Construction: 0";
      sectorChartConfig["labels"][8]= "Agriculture: 0";
      sectorChartConfig["labels"][9]= "Natural Resources: 0";
      sectorChartConfig["labels"][10]= "Real Estate: 0"
    };
    if($("#budset2")["val"]()== 0) {
      budgetIncomeConfig["data"]["labels"][0]= "Corporate Taxes: $"+ sectorOwnership["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      budgetIncomeConfig["data"]["labels"][1]= "Personal Taxes: $"+ (sectorSubsidy)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][2]= "Consumption Taxes: $"+ (incomePctGdp)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][3]= "Import Tariffs: $"+ (sectorCorpTaxMax)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][4]= "Export Tariffs: $"+ (sectorCorpTaxMin)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][5]= "Inheritance Tax: $"+ (estateRevenue)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][6]= "Wealth Tax: $"+ (wealthTaxRevenue)["toLocaleString"](undefined, { maximumFractionDigits:1 }); budgetIncomeConfig["data"]["labels"][7]= "Real Estate: $"+ (reaIncomeTotal)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][8]= "Public Industries: $"+ (reaLandTaxIncome)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetIncomeConfig["data"]["labels"][9]= (finesRevenue> 0? "Other & Fines: $": "Other: $")+ (envRegSpending+ finesRevenue)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][0]= "Military: $"+ (milSpending)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      budgetSpendConfig["data"]["labels"][1]= "Welfare: $"+ (netBalance)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][2]= "Education: $"+ (reaPropTaxIncome)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][3]= "Science: $"+ (sciSpending)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][4]= "Environment: $"+ (spendGrandTotal)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][5]= "Housing: $"+ (reaSubsidyPrivate)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][6]= "Industries: $"+ (fmtGdp)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      });
      budgetSpendConfig["data"]["labels"][7]= "Other: $"+ (immRegSpending)["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })
    }else  {
      if($("#budset2")["val"]()== 1) {
        budgetIncomeConfig["data"]["labels"][0]= "Corporate Taxes: "+ (sectorOwnership* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][1]= "Personal Taxes: "+ ((sectorSubsidy)* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][2]= "Consumption Taxes: "+ (incomePctGdp* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][3]= "Import Tariffs: "+ (sectorCorpTaxMax* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][4]= "Export Tariffs: "+ (sectorCorpTaxMin* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][5]= "Inheritance Tax: "+ (estateRevenue* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][6]= "Wealth Tax: "+ (wealthTaxRevenue* 100/ incomeGrandTotal)["toLocaleString"](undefined, { maximumFractionDigits:1 })+ "%"; budgetIncomeConfig["data"]["labels"][7]= "Real Estate: "+ (reaIncomeTotal* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][8]= "Public Industries: "+ ((reaLandTaxIncome)* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetIncomeConfig["data"]["labels"][8]= "Other: "+ (envRegSpending* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][0]= "Military: "+ ((milSpending)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][1]= "Welfare: "+ ((netBalance)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][2]= "Education: "+ ((reaPropTaxIncome)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][3]= "Science: "+ ((sciSpending)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][4]= "Environment: "+ ((spendGrandTotal)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][5]= "Housing: "+ ((reaSubsidyPrivate)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][6]= "Industries: "+ ((fmtGdp)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%";
        budgetSpendConfig["data"]["labels"][7]= "Other: "+ ((immRegSpending)* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "%"
      }else  {
        if($("#budset2")["val"]()== 2) {
          budgetIncomeConfig["data"]["labels"][0]= "Corporate Taxes: "+ (sectorOwnership* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "% of GDP";
          budgetIncomeConfig["data"]["labels"][1]= "Personal Taxes: "+ ((sectorSubsidy)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][2]= "Consumption Taxes: "+ (incomePctGdp* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][3]= "Import Tariffs: "+ (sectorCorpTaxMax* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][4]= "Export Tariffs: "+ (sectorCorpTaxMin* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][5]= "Inheritance Tax: "+ (estateRevenue* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][6]= "Wealth Tax: "+ (wealthTaxRevenue* 100/ totalGovSpending)["toLocaleString"](undefined, { maximumFractionDigits:1 })+ "%"; budgetIncomeConfig["data"]["labels"][7]= "Real Estate: "+ (reaIncomeTotal* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][8]= "Public Industries: "+ ((reaLandTaxIncome)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetIncomeConfig["data"]["labels"][8]= "Other: "+ (envRegSpending* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][0]= "Military: "+ ((milSpending)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "% of GDP";
          budgetSpendConfig["data"]["labels"][1]= "Welfare: "+ ((netBalance)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][2]= "Education: "+ ((reaPropTaxIncome)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][3]= "Science: "+ ((sciSpending)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][4]= "Environment: "+ ((spendGrandTotal)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][5]= "Housing: "+ ((reaSubsidyPrivate)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][6]= "Industries: "+ ((fmtGdp)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%";
          budgetSpendConfig["data"]["labels"][7]= "Other: "+ ((immRegSpending)* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "%"
        }
      }
    };
    if($("#budset")["val"]()== 0) {
      if(balanceDisplay< 0) {
        $(".balan")["html"]("Budget Deficit: $"+ Math["abs"](balanceDisplay)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ " Bln");
        $(".balan")["css"]("color","#cd4c4c");
        $(".balan")["hover"](function() {
          $(this)["css"]("color","#ea3939")
        },function() {
          $(this)["css"]("color","#cd4c4c")
        })
      }else  {
        if(balanceDisplay> 0) {
          $(".balan")["html"]("Budget Surplus: $"+ Math["abs"](balanceDisplay)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ " Bln");
          $(".balan")["css"]("color","#40922f");
          $(".balan")["hover"](function() {
            $(this)["css"]("color","#4cad38")
          },function() {
            $(this)["css"]("color","#40922f")
          })
        }else  {
          if(balanceDisplay== 0) {
            $(".balan")["html"]("Budget Balance: $0");
            $(".balan")["css"]("color","#aeaeb7");
            $(".balan")["hover"](function() {
              $(this)["css"]("color","#e4e4e7")
            },function() {
              $(this)["css"]("color","#aeaeb7")
            })
          }
        }
      };
      budgetIncomeConfig["options"]["title"]["text"]= "Income: $"+ incomeGrandTotal["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln";
      budgetSpendConfig["options"]["title"]["text"]= "Spending: $"+ budgetTotal["toLocaleString"](undefined, {
        maximumFractionDigits:1
      })+ " Bln"
    }else  {
      if($("#budset")["val"]()== 1) {
        if(balanceDisplay< 0) {
          $(".balan")["html"]("Budget Deficit: "+ Math["abs"](balanceDisplay* 100/ budgetTotal)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "% of Spending");
          $(".balan")["css"]("color","#cd4c4c");
          $(".balan")["hover"](function() {
            $(this)["css"]("color","#ea3939")
          },function() {
            $(this)["css"]("color","#cd4c4c")
          })
        }else  {
          if(balanceDisplay> 0) {
            $(".balan")["html"]("Budget Surplus: "+ Math["abs"](balanceDisplay* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
              maximumFractionDigits:1
            })+ "% of Income");
            $(".balan")["css"]("color","#40922f");
            $(".balan")["hover"](function() {
              $(this)["css"]("color","#4cad38")
            },function() {
              $(this)["css"]("color","#40922f")
            })
          }else  {
            if(balanceDisplay== 0) {
              $(".balan")["html"]("Budget Balance: 0%");
              $(".balan")["css"]("color","#aeaeb7");
              $(".balan")["hover"](function() {
                $(this)["css"]("color","#e4e4e7")
              },function() {
                $(this)["css"]("color","#aeaeb7")
              })
            }
          }
        };
        budgetIncomeConfig["options"]["title"]["text"]= "Income: "+ (incomeGrandTotal* 100/ budgetTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "% of Spending";
        budgetSpendConfig["options"]["title"]["text"]= "Spending: "+ (budgetTotal* 100/ incomeGrandTotal)["toLocaleString"](undefined, {
          maximumFractionDigits:1
        })+ "% of Income"
      }else  {
        if($("#budset")["val"]()== 2) {
          if(balanceDisplay< 0) {
            $(".balan")["html"]("Budget Deficit: "+ Math["abs"](balanceDisplay* 100/ totalGovSpending)["toLocaleString"](undefined, {
              maximumFractionDigits:1
            })+ "% of GDP");
            $(".balan")["css"]("color","#cd4c4c");
            $(".balan")["hover"](function() {
              $(this)["css"]("color","#ea3939")
            },function() {
              $(this)["css"]("color","#cd4c4c")
            })
          }else  {
            if(balanceDisplay> 0) {
              $(".balan")["html"]("Budget Surplus: "+ Math["abs"](balanceDisplay* 100/ totalGovSpending)["toLocaleString"](undefined, {
                maximumFractionDigits:1
              })+ "% of GDP");
              $(".balan")["css"]("color","#40922f");
              $(".balan")["hover"](function() {
                $(this)["css"]("color","#4cad38")
              },function() {
                $(this)["css"]("color","#40922f")
              })
            }else  {
              if(balanceDisplay== 0) {
                $(".balan")["html"]("Budget Balance: 0% of GDP");
                $(".balan")["css"]("color","#aeaeb7");
                $(".balan")["hover"](function() {
                  $(this)["css"]("color","#e4e4e7")
                },function() {
                  $(this)["css"]("color","#aeaeb7")
                })
              }
            }
          };
          budgetIncomeConfig["options"]["title"]["text"]= "Income: "+ (incomeGrandTotal* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "% of GDP";
          budgetSpendConfig["options"]["title"]["text"]= "Spending: "+ (budgetTotal* 100/ totalGovSpending)["toLocaleString"](undefined, {
            maximumFractionDigits:1
          })+ "% of GDP"
        }
      }
    };
    if(sovVal== 4) {
      budgetIncomeConfig["data"]["labels"][0]= "Corporate Taxes: 0";
      budgetIncomeConfig["data"]["labels"][1]= "Personal Taxes: 0";
      budgetIncomeConfig["data"]["labels"][2]= "Consumption Taxes: 0";
      budgetIncomeConfig["data"]["labels"][3]= "Import Tariffs: 0";
      budgetIncomeConfig["data"]["labels"][4]= "Export Tariffs: 0";
      budgetIncomeConfig["data"]["labels"][5]= "Inheritance Tax: 0";
      budgetIncomeConfig["data"]["labels"][6]= "Wealth Tax: 0";
      budgetIncomeConfig["data"]["labels"][7]= "Real Estate: 0";
      budgetIncomeConfig["data"]["labels"][8]= "Public Industries: 0";
      budgetIncomeConfig["data"]["labels"][9]= "Other: 0";
      budgetSpendConfig["data"]["labels"][0]= "Military: 0";
      budgetSpendConfig["data"]["labels"][1]= "Welfare: 0";
      budgetSpendConfig["data"]["labels"][2]= "Education: 0";
      budgetSpendConfig["data"]["labels"][3]= "Science: 0";
      budgetSpendConfig["data"]["labels"][4]= "Environment: 0";
      budgetSpendConfig["data"]["labels"][5]= "Housing: 0";
      budgetSpendConfig["data"]["labels"][6]= "Industries: 0";
      budgetSpendConfig["data"]["labels"][7]= "Other: 0";
      budgetIncomeConfig["data"]["datasets"][0]["data"][0]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][1]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][2]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][3]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][4]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][5]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][6]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][7]= 0;
      budgetIncomeConfig["data"]["datasets"][0]["data"][8]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][0]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][1]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][2]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][3]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][4]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][5]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][6]= 0;
      budgetSpendConfig["data"]["datasets"][0]["data"][7]= 0;
      budgetSpendConfig["options"]["title"]["text"]= "Spending: 0";
      budgetIncomeConfig["options"]["title"]["text"]= "Income: 0";
      $(".balan")["html"]("Budget Balance: 0");
      $(".gdpnum")["html"]("GDP: 0")
    };
    window["myHorizontalBar"]["update"]();
    window["myPolarArea"]["update"]();
    window["myDoughnut"]["update"]();
    window["myDoughnut2"]["update"]();
    window["myScatter"]["update"]()
  }$(".slidz")["on"]("slide",function(evt) {
    setTimeout(budgetSpendTotal,0)
  });
  $(".chooser")["on"]("change",function(evt) {
    setTimeout(budgetSpendTotal,0)
  })["trigger"]("change");

  /* ---------- RESET FUNCTIONS ---------- */
  function resetGov() {
    $("#sov")["val"]("1")["trigger"]("change");
    $("#auto")["val"]("2")["trigger"]("change");
    $("#govg")["val"]("0")["trigger"]("change");
    $("#govc")["val"]("0")["trigger"]("change");
    $("#syse")["val"]("1")["trigger"]("change");
    $("#sysl")["val"]("2")["trigger"]("change");
    $("#sysj")["val"]("2")["trigger"]("change");
    $("#rel")["val"]("1")["trigger"]("change");
    $("#for")["val"]("2")["trigger"]("change");
    $("#cons")["val"]("1")["trigger"]("change");
    $("#righ")["val"]("2")["trigger"]("change");
    $("#minw")["val"]("1")["trigger"]("change");
    $("#minw2")["val"]("1")["trigger"]("change");
    $("#pensreg")["val"]("2")["trigger"]("change");
    $("#centow")["val"]("1")["trigger"]("change");
    $("#votr")["val"](["0"])["trigger"]("change");
    $("#entreq")["val"](["0","1"])["trigger"]("change");
    $("#envreg")["val"](["0","1"])["trigger"]("change");
    $("#womrig")["val"](["0","1","2","3"])["trigger"]("change");
    $("#centfun")["val"](["0"])["trigger"]("change");
    $("#mifu")["slider"]("value",10);
    $("#imman")["slider"]("value",0.8);
    $("#immst")["slider"]("value",40);
    $("#immwo")["slider"]("value",40);
    $("#immas")["slider"]("value",10);
    $("#immref")["slider"]("value",10);
    $("#reserv")["slider"]("value",25);
    $("#pover")["slider"]("value",50);
    $("#unemp")["slider"]("value",50);
    $("#pens")["slider"]("value",50);
    $("#mininc")["slider"]("value",25);
    $("#basinc")["slider"]("value",3);
    $("#wast")["slider"]("value",50);
    $("#pubpa")["slider"]("value",50);
    $("#conser")["slider"]("value",50);
    $("#solar")["slider"]("value",25);
    $("#nucl")["slider"]("value",25);
    $("#rnd")["slider"]("value",8);
    $(".mifu")["html"]("Funding: 10.0% of GDP");
    $(".imman")["html"]("Annual Limit: 0.8%");
    $(".immst")["html"]("Students: 40%");
    $(".immwo")["html"]("Workers: 40%");
    $(".immas")["html"]("Asylees: 10%");
    $(".immref")["html"]("Refugees: 10%");
    $(".reserv")["html"]("Cash Reserve Ratio: 25%");
    $(".pover")["html"]("Poverty Fund: 1.00% of GDP");
    $(".unemp")["html"]("Unemployed Fund: 4.00% of GDP");
    $(".pens")["html"]("Pension Fund: 6.25% of GDP");
    $(".mininc")["html"]("Minimum Income: 2.00% of GDP");
    $(".basinc")["html"]("Basic Income: 3.0% of GDP");
    $(".wast")["html"]("Waste Disposal: 0.125% of GDP");
    $(".pubpa")["html"]("Public Parks: 0.0250% of GDP");
    $(".conser")["html"]("Conservation: 0.75% of GDP");
    $(".solar")["html"]("Solar Energy: 0.125% of GDP");
    $(".nucl")["html"]("Nuclear Energy: 0.125% of GDP");
    $(".rnd")["html"]("Science: 8.0% of GDP");
    $("#inher")["slider"]("values",0,0);
    $("#inher")["slider"]("values",1,6);
    $(".inher")["html"]("Inheritance Tax: 0% - 6%")
  }function resetLaw() {
    $("#murd")["val"]("2")["trigger"]("change");
    $("#rape")["val"]("2")["trigger"]("change");
    $("#steal")["val"]("0")["trigger"]("change");
    $("#child")["val"]("2")["trigger"]("change");
    $("#defa")["val"]("1")["trigger"]("change");
    $("#incit")["val"]("2")["trigger"]("change");
    $("#stprost")["val"]("2")["trigger"]("change");
    $("#broth")["val"]("2")["trigger"]("change");
    $("#esco")["val"]("2")["trigger"]("change");
    $("#hand")["val"]("2")["trigger"]("change");
    $("#shot")["val"]("2")["trigger"]("change");
    $("#rifle")["val"]("2")["trigger"]("change");
    $("#casin")["val"]("2")["trigger"]("change");
    $("#oncasin")["val"]("2")["trigger"]("change");
    $("#sports")["val"]("2")["trigger"]("change");
    $("#homogen")["val"]("1")["trigger"]("change");
    $("#homoad")["val"]("1")["trigger"]("change");
    $("#transgen")["val"]("1")["trigger"]("change");
    $("#transad")["val"]("2")["trigger"]("change");
    $("#tobus")["val"]("2")["trigger"]("change");
    $("#tobsel")["val"]("2")["trigger"]("change");
    $("#alcus")["val"]("2")["trigger"]("change");
    $("#alcsel")["val"]("2")["trigger"]("change");
    $("#canus")["val"]("2")["trigger"]("change");
    $("#cansel")["val"]("2")["trigger"]("change");
    $("#psyus")["val"]("2")["trigger"]("change");
    $("#psysel")["val"]("2")["trigger"]("change");
    $("#stius")["val"]("2")["trigger"]("change");
    $("#stisel")["val"]("2")["trigger"]("change");
    $("#opius")["val"]("2")["trigger"]("change");
    $("#opisel")["val"]("2")["trigger"]("change");
    $("#euth")["val"]("2")["trigger"]("change");
    $("#obsc")["val"]("1")["trigger"]("change");
    $("#warc")["val"]("4")["trigger"]("change");
    $("#corf")["val"]("1")["trigger"]("change");
    $("#blasph")["val"]("0")["trigger"]("change");
    $("#treas")["val"]("2")["trigger"]("change");
    $("#embe")["val"]("2")["trigger"]("change");
    $("#misce")["val"]("0")["trigger"]("change");
    $("#disse")["val"]("0")["trigger"]("change");
    $("#surv")["val"]("1")["trigger"]("change");
    $("#datap")["val"]("1")["trigger"]("change");
    $("#encry")["val"]("0")["trigger"]("change");
    $("#union")["val"]("1")["trigger"]("change");
    $("#childlab")["val"]("1")["trigger"]("change");
    $("#ipprop")["val"]("1")["trigger"]("change");
    $("#trial")["val"]("0")["trigger"]("change");
    $("#prison")["val"]("1")["trigger"]("change");
    $("#polover")["val"]("1")["trigger"]("change");
    $("#lottery")["val"]("1")["trigger"]("change");
    $("#cryptogamb")["val"]("1")["trigger"]("change");
    $("#autoweap")["val"]("5")["trigger"]("change");
    $("#explos")["val"]("3")["trigger"]("change");
    $("#conceal")["val"]("1")["trigger"]("change");
    $("#onprost")["val"]("2")["trigger"]("change");
    $("#surrog")["val"]("1")["trigger"]("change");
    $("#cyber")["val"]("2")["trigger"]("change");
    $("#hatecr")["val"]("1")["trigger"]("change");
    $("#corrupt")["val"]("2")["trigger"]("change");
    $("#gestlim")["val"]("1")["trigger"]("change");
    $("#abortwait")["val"]("0")["trigger"]("change");
    $("#abortfund")["val"]("2")["trigger"]("change");
    $("#lootbox")["val"]("0")["trigger"]("change");
    $("#childgamb")["val"]("2")["trigger"]("change");
    $("#compulsed")["val"]("2")["trigger"]("change");
    $("#religed")["val"]("1")["trigger"]("change");
    $("#homeschool")["val"]("1")["trigger"]("change");
    $("#sexed")["val"]("0")["trigger"]("change");
    $("#curriculum")["val"]("0")["trigger"]("change");
    $("#healthsys")["val"]("3")["trigger"]("change");
    $("#mentalh")["val"]("1")["trigger"]("change");
    $("#vacc")["val"]("1")["trigger"]("change");
    $("#marriage")["val"]("1")["trigger"]("change");
    $("#divorce")["val"]("0")["trigger"]("change");
    $("#polygamy")["val"]("2")["trigger"]("change");
    $("#ageconsent")["val"]("2")["trigger"]("change");
    $("#pressf")["val"]("0")["trigger"]("change");
    $("#assembly")["val"]("1")["trigger"]("change");
    $("#censor")["val"]("1")["trigger"]("change");
    $("#slavery")["val"]("0")["trigger"]("change");
    $("#citizen")["val"]("0")["trigger"]("change");
    $("#citizenpath")["val"]("0")["trigger"]("change");
    $("#deathpen")["val"]("2")["trigger"]("change");
    $("#socredit")["val"]("0")["trigger"]("change");
    $("#housing")["val"]("3")["trigger"]("change");
    $("#landow")["val"]("3")["trigger"]("change");
    $("#eminent")["val"]("1")["trigger"]("change");
    $("#homeless")["val"]("1")["trigger"]("change");
    $("#carbpol")["val"]("1")["trigger"]("change");
    $("#nucpol")["val"]("1")["trigger"]("change");
    $("#animal")["val"]("2")["trigger"]("change");
    $("#gmo")["val"]("2")["trigger"]("change");
    $("#water")["val"]("1")["trigger"]("change");
    $("#statemedia")["val"]("1")["trigger"]("change");
    $("#langpol")["val"]("1")["trigger"]("change");
    $("#artscult")["slider"]("value",0.25);
    $(".artscult")["html"]("Arts &amp; Culture: 0.25% of GDP");
    $("#hatespeech")["val"]("1")["trigger"]("change");
    $("#transit")["val"]("1")["trigger"]("change");
    $("#roads")["val"]("0")["trigger"]("change");
    $("#autodrive")["val"]("2")["trigger"]("change");
    $("#space")["val"]("1")["trigger"]("change");
    $("#crypto")["val"]("1")["trigger"]("change");
    $("#bankrupt")["val"]("0")["trigger"]("change");
    $("#ubitype")["val"]("3")["trigger"]("change");
    $("#wealthtax")["slider"]("values",0,0);
    $("#wealthtax")["slider"]("values",1,1);
    $(".wealthtax")["html"]("Wealth Tax: 0% - 1% of net worth");
    $("#statebank")["val"]("2")["trigger"]("change");
    $("#airegul")["val"]("1")["trigger"]("change");
    $("#cloning")["val"]("1")["trigger"]("change");
    $("#stemcell")["val"]("0")["trigger"]("change");
    $("#genedit")["val"]("1")["trigger"]("change");
    $("#dataown")["val"]("1")["trigger"]("change");
    $("#taxloop")["val"]("3")["trigger"]("change");
    $("#abort")["val"](["1","2"])["trigger"]("change");
    $("#fabort")["val"]([])["trigger"]("change")
  }function resetSectors() {
    $("#allsow")["slider"]("value",30);
    $("#allsfun")["slider"]("value",15);
    $("#allsinc")["slider"]("values",0,0);
    $("#allsinc")["slider"]("values",1,50);
    $("#allscor")["slider"]("values",0,0);
    $("#allscor")["slider"]("values",1,50);
    $("#allscons")["slider"]("value",12);
    $("#allsimp")["slider"]("value",25);
    $("#allsexp")["slider"]("value",25);
    $(".allsow")["html"]("Public Ownership: 30%");
    $(".allsfun")["html"]("Subsidies: 15%");
    $(".allsinc")["html"]("Personal Tax: 0% - 50%");
    $(".allscor")["html"]("Corporate Tax: 0% - 50%");
    $(".allscons")["html"]("Consumption Tax: 12%");
    $(".allsimp")["html"]("Import Tariffs: 25%");
    $(".allsexp")["html"]("Export Tariffs: 25%");
    $("#allsprc")["slider"]("value",0);
    $("#allswag")["slider"]("value",0);
    $("#allswagr")["slider"]("value",0);
    $(".allsprc")["html"]("Prices: 0%");
    $(".allswag")["html"]("Wages: 0%");
    $(".allswagr")["html"]("Wage Ratio: 100");
    $("#edugdp")["slider"]("value",4.1);
    $("#medgdp")["slider"]("value",3.1);
    $("#bankgdp")["slider"]("value",9.7);
    $("#heagdp")["slider"]("value",9);
    $("#retgdp")["slider"]("value",13.6);
    $("#manugdp")["slider"]("value",27.8);
    $("#infrgdp")["slider"]("value",4.4);
    $("#agrgdp")["slider"]("value",1.4);
    $("#reagdp")["slider"]("value",8.8);
    $("#natgdp")["slider"]("value",2.6);
    $(".edugdp")["html"]("Education: 4.1%");
    $(".medgdp")["html"]("Media: 3.1%");
    $(".bankgdp")["html"]("Finance: 9.7%");
    $(".heagdp")["html"]("Healthcare: 9%");
    $(".retgdp")["html"]("Retail: 13.6%");
    $(".manugdp")["html"]("Manufacturing: 27.8%");
    $(".infrgdp")["html"]("Construction: 4.4%");
    $(".agrgdp")["html"]("Agriculture: 1.4%");
    $(".reagdp")["html"]("Real Estate: 8.8%");
    $(".natgdp")["html"]("Natural Resources: 2.6%");
    $("#gdpval")["slider"]("value",18000);
    $(".gdpval")["html"]("GDP Multiplier: 18,000");
    for(i= 0;
    i< sectors["length"];
    i++) {
      $("#"+ sectors[i]["id"]+ "ow")["slider"]("value",30);
      $("#"+ sectors[i]["id"]+ "fun")["slider"]("value",15);
      $("#"+ sectors[i]["id"]+ "inc")["slider"]("values",0,0);
      $("#"+ sectors[i]["id"]+ "inc")["slider"]("values",1,50);
      $("#"+ sectors[i]["id"]+ "cor")["slider"]("values",0,0);
      $("#"+ sectors[i]["id"]+ "cor")["slider"]("values",1,50);
      $("#"+ sectors[i]["id"]+ "cons")["slider"]("value",12);
      $("#"+ sectors[i]["id"]+ "imp")["slider"]("value",25);
      $("#"+ sectors[i]["id"]+ "exp")["slider"]("value",25);
      $("."+ sectors[i]["id"]+ "ow")["html"]("Public Ownership: 30%");
      $("."+ sectors[i]["id"]+ "fun")["html"]("Subsidies: 15%");
      $("."+ sectors[i]["id"]+ "inc")["html"]("Personal Tax: 0% - 50%");
      $("."+ sectors[i]["id"]+ "cor")["html"]("Corporate Tax: 0% - 50%");
      $("."+ sectors[i]["id"]+ "cons")["html"]("Consumption Tax: 12%");
      $("."+ sectors[i]["id"]+ "imp")["html"]("Import Tariffs: 25%");
      $("."+ sectors[i]["id"]+ "exp")["html"]("Export Tariffs: 25%");
      $("#"+ sectors[i]["id"]+ "prc")["slider"]("value",0);
      $("#"+ sectors[i]["id"]+ "wag")["slider"]("value",0);
      $("#"+ sectors[i]["id"]+ "wagr")["slider"]("value",0);
      $("."+ sectors[i]["id"]+ "prc")["html"]("Prices: 0%");
      $("."+ sectors[i]["id"]+ "wag")["html"]("Wages: 0%");
      $("."+ sectors[i]["id"]+ "wagr")["html"]("Wage Ratio: 100")
    };
    $(".bankcons")["html"]("Capital Gains Tax: 12%");
    $("#reareg0")["slider"]("value",20);
    $("#reareg1")["slider"]("value",6);
    $("#reareg2")["slider"]("value",6);
    $("#reareg3")["slider"]("value",15);
    $("#reareg4")["slider"]("value",15);
    $(".reareg0")["html"]("Subsidies: 20%");
    $(".reareg1")["html"]("Land Tax: 6%");
    $(".reareg2")["html"]("Property Tax: 6%");
    $(".reareg3")["html"]("Rent Tax: 15%");
    $(".reareg4")["html"]("Sales Tax: 15%");
    $("#reacom1")["slider"]("value",0);
    $("#reacom2")["slider"]("value",0);
    $(".reacom1")["html"]("Selling Prices: 0%");
    $(".reacom2")["html"]("Renting Prices: 0%");
    $("#sov")["trigger"]("change")
  }$(".resgov")["click"](resetGov);
  $(".reslaw")["click"](resetLaw);
  $(".ressec")["click"](resetSectors);
  $(".resall")["click"](function() {
    resetGov();
    resetLaw();
    resetSectors()
  })
}
