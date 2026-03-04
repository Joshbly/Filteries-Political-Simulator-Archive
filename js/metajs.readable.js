
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
  var spectrumWeightsX=window.spectrumWeightsData["X"];
  var spectrumWeightsY=window.spectrumWeightsData["Y"];
  var spectrumWeights3=window.spectrumWeightsData["3"];
  var spectrumWeights4=window.spectrumWeightsData["4"];
  var spectrumWeights5=window.spectrumWeightsData["5"];
  var spectrumWeights6=window.spectrumWeightsData["6"];
  var spectrumWeights7=window.spectrumWeightsData["7"];
  var spectrumWeights8=window.spectrumWeightsData["8"];
  var spectrumWeights9=window.spectrumWeightsData["9"];
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
  function computeAxisTotal(W, dv, immBase, immDiv) {
    var immScore = immBase + ((immanVal / immDiv) * (W[2]["imman"]||0)) * (
      (immstVal / 100) * (W[2]["immst"]||0) + (immwoVal / 100) * (W[2]["immwo"]||0) +
      (immasVal / 100) * (W[2]["immas"]||0) + (immrefVal / 100) * (W[2]["immref"]||0));
    var t = immScore;
    var stdKeys = ["sov","auto","govg","govc","syse","sysl","sysj","rel","for","cons","righ","minw","minw2","pensreg","centow",
      "murd","rape","steal","child","defa","incit","stprost","broth","esco","hand","shot","rifle",
      "casin","oncasin","sports","homogen","homoad","transgen","transad",
      "tobus","tobsel","alcus","alcsel","canus","cansel","psyus","psysel","stius","stisel","opius","opisel",
      "euth","obsc","warc","corf","blasph","treas","embe","misce","disse"];
    for(var i=0;i<stdKeys.length;i++){var k=stdKeys[i];var v=dv[k];if(v!==undefined&&W[v])t+=(W[v][k]||0);}
    var slKeys=["mifu","reserv","pover","unemp","pens","mininc","basinc","wast","pubpa","conser","solar","nucl","rnd"];
    var slVals=[mifuVal,reservVal,poverVal,unempVal,pensVal,minincVal,basincVal,wastVal,pubpaVal,conservVal,solarVal,nuclVal,rndVal];
    for(var i=0;i<slKeys.length;i++){t+=(slVals[i]/100)*(W[2][slKeys[i]]||0);}
    t+=(inherMinVal/200)*(W[2]["inher"]||0)+(inherMaxVal/200)*(W[2]["inher"]||0);
    var m7Keys=["votr","entreq","envreg","womrig","centfun","abort","fabort"];
    for(var i=0;i<m7Keys.length;i++){t+=(W[7][m7Keys[i]]||0);}
    var nsKeys=["surv","datap","encry","union","childlab","ipprop","trial","prison","polover",
      "compulsed","religed","homeschool","sexed","curriculum","healthsys","mentalh","vacc",
      "marriage","divorce","polygamy","ageconsent","pressf","assembly","censor","slavery","citizen",
      "deathpen","socredit","housing","landow","eminent","homeless","carbpol","nucpol","animal","gmo","water",
      "statemedia","langpol","hatespeech","transit","roads","autodrive","space","crypto","bankrupt",
      "ubitype","wealthtax","statebank","airegul","cloning","stemcell","genedit","dataown","taxloop",
      "citizenpath","paramilitary","moralpolice","moralscope","moralpenalty"];
    for(var i=0;i<nsKeys.length;i++){var k=nsKeys[i];var v=dv[k];if(v!==undefined&&W[v])t+=(W[v][k]||0);}
    return t;
  }
    var dropVals={sov:sovVal,auto:autoVal,govg:govgVal,govc:govcVal,syse:syseVal,sysl:syslVal,sysj:sysjVal,
      rel:relVal,"for":forPolVal,cons:conscrVal,righ:righVal,minw:minwVal,minw2:minw2Val,pensreg:pensregVal,centow:centowVal,
      murd:murdVal,rape:rapeVal,steal:stealVal,child:childVal,defa:defaVal,incit:incitVal,
      stprost:prostVal,broth:brothVal,esco:escoVal,hand:handVal,shot:shotVal,rifle:rifleVal,
      casin:casinVal,oncasin:oncasinVal,sports:sportsVal,homogen:homogenVal,homoad:homoadVal,transgen:transgenVal,transad:transadVal,
      tobus:tobusVal,tobsel:tobselVal,alcus:alcusVal,alcsel:alcselVal,canus:canusVal,cansel:canselVal,
      psyus:psyusVal,psysel:psyselVal,stius:stiusVal,stisel:stiselVal,opius:opiusVal,opisel:opiselVal,
      euth:euthVal,obsc:obscVal,warc:warcVal,corf:corfVal,blasph:blasphVal,treas:treasVal,embe:embeVal,misce:misceVal,disse:disseVal,
      surv:survVal,datap:datapVal,encry:encryVal,union:unionVal,childlab:childlabVal,ipprop:ippropVal,
      trial:trialVal,prison:prisonVal,polover:poloverVal,compulsed:compulsedVal,religed:religedVal,
      homeschool:homeschoolVal,sexed:sexedVal,curriculum:curriculumVal,healthsys:healthsysVal,mentalh:mentalhVal,vacc:vaccVal,
      marriage:marriageVal,divorce:divorceVal,polygamy:polygamyVal,ageconsent:ageconsentVal,
      pressf:pressfVal,assembly:assemblyVal,censor:censorVal,slavery:slaveryVal,citizen:citizenVal,
      deathpen:deathpenVal,socredit:socreditVal,housing:housingVal,landow:landowVal,eminent:eminentVal,
      homeless:homelessVal,carbpol:carbpolVal,nucpol:nucpolVal,animal:animalVal,gmo:gmoVal,water:waterVal,
      statemedia:statemediaVal,langpol:langpolVal,hatespeech:hatespeechVal,transit:transitVal,roads:roadsVal,
      autodrive:autodriveVal,space:spaceVal,crypto:cryptoVal,bankrupt:bankruptVal,ubitype:ubitypeVal,
      wealthtax:wealthtaxVal,statebank:statebankVal,airegul:airegulVal,cloning:cloningVal,stemcell:stemcellVal,
      genedit:geneditVal,dataown:dataownVal,taxloop:taxloopVal,citizenpath:citizenpathVal,
      paramilitary:paramilitaryVal,moralpolice:moralpoliceVal,moralscope:moralscopeVal,moralpenalty:moralpenaltyVal};
    var xAxisTotal=computeAxisTotal(spectrumWeightsX,dropVals,0,4);
    var yAxisTotal=computeAxisTotal(spectrumWeightsY,dropVals,0,4);
    yAxisTotal+=(artscultVal*-1.5);
    var ax3Total=computeAxisTotal(spectrumWeights3,dropVals,0,4);
    var ax3Total=ax3Total* 0.96+ sectors[1]["ownz"]* 0.04;
    var ax4Total=computeAxisTotal(spectrumWeights4,dropVals,0,4);
    var ax5Total=computeAxisTotal(spectrumWeights5,dropVals,0,4);
    var ax6Total=computeAxisTotal(spectrumWeights6,dropVals,0,4);
    var ax7Total=computeAxisTotal(spectrumWeights7,dropVals,0,4);
    var ax8Total=computeAxisTotal(spectrumWeights8,dropVals,0,4);
    var ax9Total=computeAxisTotal(spectrumWeights9,dropVals,0,4);

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
    var judiciaryTypeLabel="";
    var govSystemLabel="-";
    var syslKeys=["dirz","elez","appz","exez","sorz","corpz","relz","herz","milz","algoz"];
    var labelTable=(govgVal== 0)? govSystemLabels: monarchyLabels;
    if(labelTable[syseVal]&& syslKeys[syslVal]) {
      var govSystemLabel=labelTable[syseVal][syslKeys[syslVal]]|| "-"
    };
    if(sysjVal== 0) {
      var judiciaryTypeLabel="Populist"
    };
    if(sysjVal== 1|| sysjVal== 2) {
      var judiciaryTypeLabel="Constitutional"
    };
    if(sysjVal== 3) {
      var judiciaryTypeLabel="Executive"
    };
    if(sysjVal== 4) {
      var judiciaryTypeLabel="Tribal"
    };
    if(sysjVal== 5) {
      var judiciaryTypeLabel="Theonomic"
    };
    if(sysjVal== 6) {
      var judiciaryTypeLabel="Algorithmic"
    };
    if(sysjVal== 7) {
      var judiciaryTypeLabel="Corporate"
    };
    if(sysjVal== 8) {
      var judiciaryTypeLabel="Martial"
    };
    if(sysjVal== 9) {
      var judiciaryTypeLabel="Sortitive"
    };
    if(sysjVal== 10) {
      var judiciaryTypeLabel="Dynastic"
    };
    if(syseVal== 0&& syslVal== 3&& sysjVal== 3) {
      var govSystemLabel="Absolute Democracy"
    };
    if(syseVal== 3&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var govSystemLabel="Absolute Hereditary Monarchy"
    };
    if(syseVal== 2&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var govSystemLabel="Absolute Elective Monarchy"
    };
    if(syseVal== 4&& syslVal== 3&& sysjVal== 3&& govgVal== 1) {
      var govSystemLabel="Absolute Military Despotism"
    };
    if(syseVal== 4&& syslVal== 3&& sysjVal== 3&& govgVal== 0) {
      var govSystemLabel="Absolute Military Dictatorship"
    };
    if(syseVal== 6&& syslVal== 5&& govgVal== 0) {
      var govSystemLabel="Corporate Oligarchy"
    };
    if(syseVal== 6&& syslVal== 5&& govgVal== 1) {
      var govSystemLabel="Corporate Despotism"
    };
    if(judiciaryTypeLabel== "Theonomic"&& govSystemLabel.indexOf("Theocratic")!= -1) {
      govSystemLabel= govSystemLabel.replace("Theocratic ","");
      judiciaryTypeLabel= "Theocratic"
    };
    if(judiciaryTypeLabel== "Tribal"&& govSystemLabel.indexOf("Tribal")!= -1) {
      govSystemLabel= govSystemLabel.replace("Tribal ","");
      judiciaryTypeLabel= "Tribal"
    };
    if(judiciaryTypeLabel== "Algorithmic"&& govSystemLabel.indexOf("Corporate")!= -1) {
      judiciaryTypeLabel= "Techno-Corporate";
      govSystemLabel= govSystemLabel.replace("Corporate ","")
    };
    if(judiciaryTypeLabel== "Corporate"&& govSystemLabel.indexOf("Corporate")!= -1) {
      govSystemLabel= govSystemLabel.replace("Corporate ","")
    };
    if(govSystemLabel.indexOf("Military")!= -1&& govSystemLabel.indexOf("Military")== 0&& judiciaryTypeLabel== "Tribal") {
      judiciaryTypeLabel= "Tribal-Military";
      govSystemLabel= govSystemLabel.replace("Military ","")
    };
    $(".structz2")["html"](judiciaryTypeLabel+ " "+ govSystemLabel);
    var netBalancePctGov=(netBalance)* 100/ totalGovSpending;
    var tradePolicyLabel="";
    var economicSystemLabel="";
    var sector5PrivateShare=(sectors[5]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[5]["ownz"]/ 100);
    var sector7PrivateShare=(sectors[7]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[7]["ownz"]/ 100);
    var sector9PrivateShare=(sectors[9]["sectgdp"]* 100/ totalGovSpending)* (1- sectors[9]["ownz"]/ 100);
    var sector5TradeIndex=(sectors[5]["impz"]- sectors[5]["expz"])/ 3+ 50;
    var sector7TradeIndex=(sectors[7]["impz"]- sectors[7]["expz"])/ 3+ 50;
    var sector9TradeIndex=(sectors[9]["expz"]- sectors[9]["impz"])/ 3+ 50;
    var weightedTradeScore=sector5TradeIndex* sector5PrivateShare/ 100+ sector7TradeIndex* sector7PrivateShare/ 100+ sector9TradeIndex* sector9PrivateShare/ 100;
    if(sectorIncTaxMax>= 40&& sovVal!= 0) {
      var tradePolicyLabel="Protectionist"
    };
    if(weightedTradeScore>= 28&& sovVal!= 0) {
      var tradePolicyLabel="Mercantilist"
    };
    if(centfunVal[0]&& centfunVal[1]&& centfunVal[2]&& centowVal== 0&& weightedTradeScore>= 31&& sovVal!= 0) {
      var tradePolicyLabel="Neomercantilist"
    };
    if((sectorTaxIncome+ sectorCorpTax)>= 68&& sectorTaxIncome>= 34) {
      var economicSystemLabel="Socialism"
    };
    if(publicSectorCost<= 50&& (sectorTaxIncome+ sectorCorpTax)>= 68) {
      var economicSystemLabel="Market Socialism"
    };
    if(sectorCorpTax>= 68&& welfareUnemployed>= 35) {
      var economicSystemLabel="State Capitalism"
    };
    if(netBalancePctGov>= 20&& sectorCorpTax>= 68) {
      var economicSystemLabel="State Socialism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78) {
      var economicSystemLabel="Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 68&& sectorIncTax>= 34) {
      var economicSystemLabel="Subsidized Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78&& inheritanceTaxTotal>= 50) {
      var economicSystemLabel="Regulatory Capitalism"
    };
    if((sectorIncTax+ sectorConsTax)>= 78&& inheritanceTaxTotal<= 10) {
      var economicSystemLabel="Free Market Capitalism"
    };
    if(netBalancePctGov>= 20&& sectorConsTax>= 68) {
      var economicSystemLabel="Welfare Capitalism"
    };
    if(sectorConsTax>= 85&& avgOwnership<= 13&& incomePctDisplay< 20) {
      var economicSystemLabel="Laissez Faire Capitalism"
    };
    if(sectorConsTax>= 100&& avgOwnership<= 2.5&& incomePctDisplay< 20) {
      var economicSystemLabel="Ultracapitalism"
    };
    if((sectorTaxIncome+ sectorCorpTax)>= 33&& (sectorIncTax+ sectorConsTax)>= 33&& netBalancePctGov>= 20&& avgOwnership>= 38&& avgOwnership<= 68) {
      var economicSystemLabel="Social Market Economy"
    };
    if(((sectorCorpTax>= 70)|| sectorTaxIncome>= 50)&& sovVal== 3&& govgVal== 0&& syseVal<= 0&& syslVal<= 0&& govcVal== 1) {
      var economicSystemLabel="Mutualism"
    };
    if(economicSystemLabel== "") {
      var economicSystemLabel="Mixed Economy"
    };
    if(tradePolicyLabel== "Protectionist"&& economicSystemLabel== "") {
      var tradePolicyLabel="Protectionism"
    };
    if(tradePolicyLabel== "Mercantilist"&& economicSystemLabel== "") {
      var tradePolicyLabel="Mercantilism"
    };
    if(tradePolicyLabel== "Neomercantilist"&& economicSystemLabel== "") {
      var tradePolicyLabel="Neomercantilism"
    };
    $(".structz3")["html"](tradePolicyLabel+ " "+ economicSystemLabel);
    var authorityLabel="";
    var genderRightsLabel="";
    var traditionLabel="";
    var nationalismLabel="";
    if(ax3Total<= 38&& disseVal== 0) {
      var authorityLabel="Liberal"
    };
    if(ax3Total<= 8&& disseVal== 0) {
      var authorityLabel="Libertarian"
    };
    if(disseVal>= 1|| ax3Total>= 67) {
      var authorityLabel="Authoritarian"
    };
    var womenRightsCount=0;
    var authSystemFlag=0;
    for(i= 0;
    i< 10;
    i++) {
      if(womrigVal[i]<= 3) {
        var womenRightsCount=womenRightsCount+ 1
      };
      if(syseVal>= 2&& syslVal>= 2&& sysjVal>= 2) {
        var authSystemFlag=1
      }
    };
    if((womenRightsCount+ authSystemFlag)<= 2) {
      var genderRightsLabel="Patriarchal"
    };
    if(ax4Total>= 58) {
      var traditionLabel="Traditionalist"
    };
    if(ax4Total>= 85) {
      var traditionLabel="Ultratraditionalist"
    };
    if(ax4Total<= 15) {
      var traditionLabel="Progressive"
    };
    if(spectrumX>= 58) {
      var nationalismLabel="Nativism"
    };
    if(spectrumX>= 71) {
      var nationalismLabel="Nationalism"
    };
    if(spectrumX>= 92) {
      var nationalismLabel="Ultranationalism"
    };
    if(ax5Total<= 34) {
      var nationalismLabel="Cosmopolitanism"
    };
    if(ax7Total== 0&& immanVal>= 1.8) {
      var nationalismLabel="Multiculturalism"
    };
    if(spectrumX<= 3) {
      var nationalismLabel="Globalism"
    };
    if(authorityLabel== "Authoritarian"&& genderRightsLabel== ""&& traditionLabel== ""&& nationalismLabel== "") {
      var authorityLabel="Authoritarianism"
    };
    if(authorityLabel== "Liberal"&& genderRightsLabel== ""&& traditionLabel== ""&& nationalismLabel== "") {
      var authorityLabel="Liberalism"
    };
    if(authorityLabel== "Libertarian"&& genderRightsLabel== ""&& traditionLabel== ""&& nationalismLabel== "") {
      var authorityLabel="Libertarianism"
    };
    if(genderRightsLabel== "Patriarchal"&& traditionLabel== ""&& nationalismLabel== "") {
      var genderRightsLabel="Patriarchy"
    };
    if(traditionLabel== "Traditionalist"&& nationalismLabel== "") {
      var traditionLabel="Traditionalism"
    };
    if(traditionLabel== "Ultratraditionalist"&& nationalismLabel== "") {
      var traditionLabel="Ultratraditionalism"
    };
    if(traditionLabel== "Progressive"&& nationalismLabel== "") {
      var traditionLabel="Progressivism"
    };
    if(traditionLabel== "Modernist"&& nationalismLabel== "") {
      var traditionLabel="Modernism"
    };
    if(authorityLabel!= ""&& genderRightsLabel!= ""&& traditionLabel!= ""&& nationalismLabel!= "") {
      $(".structz4")["css"]("font-size","1.2rem")
    }else  {
      $(".structz4")["css"]("font-size","1.35rem")
    };
    $(".structz4")["html"](authorityLabel+ " "+ genderRightsLabel+ " "+ traditionLabel+ " "+ nationalismLabel);
    if(authorityLabel== ""&& genderRightsLabel== ""&& traditionLabel== ""&& nationalismLabel== "") {
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
    var adjustedBalancePct=(netBalance+ spendGrandTotal- balancePctGdp)* 100/ totalGovSpending;
    var sciSpendPct=(sciSpending)* 100/ budgetTotal;
    var nonSciPct=(100- sciSpendPct)["toFixed"](1);
    var balanceComplement=(100- adjustedBalancePct)["toFixed"](1);
    var pubEconCombined=sectorPubPct+ econType;
    if(pubEconCombined>= 100) {
      var pubEconCombined=100
    };
    if(isNaN) {
      if(isNaN(sectorPubPct)) {
        var sectorPubPct=0
      }
    };
    if(isNaN(nonSciPct)) {
      var nonSciPct=100
    };
    if(isNaN(sciSpendPct)) {
      var sciSpendPct=0
    };
    if(isNaN(balanceComplement)) {
      var balanceComplement=100
    };
    if(sovVal== 0) {
      var sovModifier=1.05
    }else  {
      if(sovVal== 3) {
        var sovModifier=0.25
      }else  {
        if(sovVal== 2) {
          var sovModifier=0.85
        }else  {
          var sovModifier=1
        }
      }
    };
    if(autoVal== 0) {
      var autoModifier=1.1
    }else  {
      if(autoVal== 1) {
        var autoModifier=1.05
      }else  {
        if(autoVal== 3) {
          var autoModifier=0.85
        }else  {
          if(autoVal== 4) {
            var autoModifier=0.5
          }else  {
            var autoModifier=1
          }
        }
      }
    };
    if(forPolVal== 4) {
      var forPolModifier=1.05
    }else  {
      var forPolModifier=1
    };
    var econAxisComponent=(sectorIncTax+ sectorConsTax)* 0.2+ balPctGdpDisp* forPolModifier* 0.8;
    var rightScore=yAxisTotal* 0.6+ econAxisComponent* 0.4;
    var rightScore=yAxisTotal* 0.6+ welfareMinIncome* 0.3+ welfareUnemployed* 0.2+ sectorPubPct* 0.2+ (100- consTaxTotal)* 0.1;
    var unusedWelfarePension=welfarePension* 0.5+ (100- welfareUnemployed)* 0.5+ inheritanceTaxTotal* 0.5;
    var unusedWelfareComp=100- welfareUnemployed;
    var consumptionComponent=consTaxTotal* 0.8+ sectorFunPct* 0.2;
    var statismScore=xAxisTotal* autoModifier* 0.6+ consumptionComponent* sovModifier* 0.4;
    var rightScore=(rightScore)["toFixed"](1);
    var statismScore=(statismScore)["toFixed"](1);
    if(rightScore> 100) {
      var rightScore=100
    };
    if(rightScore< 0) {
      var rightScore=0
    };
    if(statismScore> 100) {
      var statismScore=100
    };
    if(statismScore< 0) {
      var statismScore=0
    };
    var leftScore=(100- rightScore)["toFixed"](1);
    var minarchismScore=(100- statismScore)["toFixed"](1);
    var pointX=(rightScore* 2- 100)* 0.732;
    var pointY=(statismScore* 2- 100)* 0.732;
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
    function pointInTri(px,py,ax,ay,bx,by,cx,cy){
      var d=((by-cy)*(ax-cx)+(cx-bx)*(ay-cy));
      var u=((by-cy)*(px-cx)+(cx-bx)*(py-cy))/d;
      var v=((cy-ay)*(px-cx)+(ax-cx)*(py-cy))/d;
      var w=1-u-v;
      return u>=0&&u<=1&&v>=0&&v<=1&&w>=0&&w<=1;
    }
    function lineIntersect(x1,y1,x2,y2,x3,y3,x4,y4){
      var d=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
      var t=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/d;
      var u=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/d;
      return[t,u];
    }
    var S=104;
    var inTR=pointInTri(pointX,pointY,0,0,S,0,0,S)?1:0;
    var inBR=pointInTri(pointX,pointY,0,0,S,0,0,-S)?1:0;
    var inBL=pointInTri(pointX,pointY,0,0,-S,0,0,-S)?1:0;
    var inTL=pointInTri(pointX,pointY,0,0,-S,0,0,S)?1:0;
    var clTR=lineIntersect(0,S,S,0,pointX+S,pointY+S,pointX,pointY);
    var clBR=lineIntersect(0,-S,S,0,pointX+S,pointY-S,pointX,pointY);
    var clBL=lineIntersect(-S,0,0,-S,pointX+S,pointY+S,pointX,pointY);
    var clTL=lineIntersect(-S,0,0,S,pointX+S,pointY-S,pointX,pointY);
    var scatterPointX=pointX;
    var scatterPointY=pointY;
    if(pointX>5&&pointY>5&&!inTR){scatterPointX=clTR[0];scatterPointY=clTR[1];}
    if(pointX>5&&pointY<-5&&!inBR){scatterPointX=clBR[0];scatterPointY=clBR[1];}
    if(pointX<-5&&pointY<-5&&!inBL){scatterPointX=clBL[0];scatterPointY=clBL[1];}
    if(pointX<-5&&pointY>5&&!inTL){scatterPointX=clTL[0];scatterPointY=clTL[1];}
    if(sovVal==4){scatterPointX=0;scatterPointY=-83.5;}
    scatterData["datasets"][0]["data"]= [ {
      x:scatterPointX,y:scatterPointY
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
    polarConfig["data"]["datasets"][0]["data"][0]= statismScore;
    polarConfig["data"]["datasets"][0]["data"][8]= minarchismScore;
    polarConfig["data"]["datasets"][0]["data"][4]= rightScore;
    polarConfig["data"]["datasets"][0]["data"][12]= leftScore;
    polarConfig["data"]["labels"][0]= "Statism: "+ statismScore+ "%";
    polarConfig["data"]["labels"][8]= "Minarchism: "+ minarchismScore+ "%";
    polarConfig["data"]["labels"][4]= "Right: "+ rightScore+ "%";
    polarConfig["data"]["labels"][12]= "Left: "+ leftScore+ "%";
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
  });

  /* ---------- SAVE / LOAD SYSTEM ---------- */
  var sliderIds=["eduprc","eduwag","eduwagr","edupex","medprc","medwag","medwagr","medpex","bankprc","bankwag","bankwagr","bankpex","heaprc","heawag","heawagr","heapex","retprc","retwag","retwagr","retpex","manuprc","manuwag","manuwagr","manupex","infrprc","infrwag","infrwagr","infrpex","agrprc","agrwag","agrwagr","agrpex","natprc","natwag","natwagr","natpex","reacom1","reacom2","heaow","heafun","heainc","heacor","heacons","heaimp","heaexp","eduow","edufun","eduinc","educor","educons","eduimp","eduexp","agrow","agrfun","agrinc","agrcor","agrcons","agrimp","agrexp","manuow","manufun","manuinc","manucor","manucons","manuimp","manuexp","bankow","bankfun","bankinc","bankcor","bankcons","bankimp","bankexp","retow","retfun","retinc","retcor","retcons","retimp","retexp","medow","medfun","medinc","medcor","medcons","medimp","medexp","infrow","infrfun","infrinc","infrcor","infrcons","infrimp","infrexp","natow","natfun","natinc","natcor","natcons","natimp","natexp","reaow","reareg0","reareg1","reareg2","reareg3","reareg4","mifu","imman","immst","immwo","immas","immref","inher","wealthtax","wealthtaxthresh","artscult","reserv","pover","unemp","pens","mininc","basinc","wast","pubpa","conser","solar","nucl","rnd","edugdp","medgdp","bankgdp","heagdp","retgdp","manugdp","infrgdp","agrgdp","reagdp","natgdp","gdpval"];
  var dropdownIds=["sov","auto","govg","govc","syse","sysl","sysj","rel","for","cons","righ","minw","minw2","pensreg","centow","murd","rape","steal","child","defa","incit","stprost","broth","esco","hand","shot","rifle","casin","oncasin","sports","homogen","homoad","transgen","transad","tobus","tobsel","alcus","alcsel","canus","cansel","psyus","psysel","stius","stisel","opius","opisel","euth","obsc","warc","corf","blasph","treas","embe","misce","disse","surv","datap","encry","union","childlab","ipprop","trial","prison","polover","lottery","cryptogamb","autoweap","explos","conceal","onprost","surrog","cyber","hatecr","corrupt","gestlim","abortwait","abortfund","lootbox","childgamb","compulsed","religed","homeschool","sexed","curriculum","healthsys","mentalh","vacc","marriage","divorce","polygamy","ageconsent","pressf","assembly","censor","slavery","citizen","citizenpath","deathpen","socredit","housing","landow","eminent","homeless","carbpol","nucpol","animal","gmo","water","statemedia","langpol","hatespeech","transit","roads","autodrive","space","crypto","bankrupt","ubitype","statebank","airegul","cloning","stemcell","genedit","dataown","taxloop","taxenforce","paramilitary","moralpolice","moralscope","moralpenalty","votr","entreq","envreg","womrig","centfun","abort","fabort"];

  function saveBuild() {
    var state={v:1,ts:Date.now(),sliders:{},dropdowns:{}};
    sliderIds.forEach(function(id) {
      var el=$("#"+id);
      if(el.length) {
        if(el.hasClass("ui-slider")) {
          var vals=el["slider"]("option","values");
          state.sliders[id]=vals? vals: el["slider"]("value");
        }
      }
    });
    dropdownIds.forEach(function(id) {
      var el=$("#"+id);
      if(el.length) state.dropdowns[id]=el["val"]();
    });
    return state;
  }

  function loadBuild(state) {
    if(!state||!state.sliders||!state.dropdowns) return;
    Object.keys(state.sliders).forEach(function(id) {
      var el=$("#"+id);
      if(!el.length||!el.hasClass("ui-slider")) return;
      var v=state.sliders[id];
      if(Array.isArray(v)) {
        el["slider"]("values",0,v[0]);
        el["slider"]("values",1,v[1]);
      } else {
        el["slider"]("value",v);
      }
    });
    Object.keys(state.dropdowns).forEach(function(id) {
      var el=$("#"+id);
      if(!el.length) return;
      el["val"](state.dropdowns[id])["trigger"]("change.select2");
    });
    $(".chooser")["trigger"]("change");
    $(".slidz")["each"](function(){$(this)["slider"]("option","slide").call(this,null,{value:$(this)["slider"]("value"),values:$(this)["slider"]("option","values")});});
  }

  $("#saveBtn")["on"]("click",function() {
    var state=saveBuild();
    var json=JSON.stringify(state);
    var blob=new Blob([json],{type:"application/json"});
    var a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="political-build-"+new Date().toISOString().slice(0,10)+".json";
    a.click();
  });

  $("#loadBtn")["on"]("click",function() {
    $("#loadFile")["click"]();
  });

  $("#loadFile")["on"]("change",function(e) {
    var file=e.target.files[0];
    if(!file) return;
    var reader=new FileReader();
    reader.onload=function(ev) {
      try {
        var state=JSON.parse(ev.target.result);
        loadBuild(state);
      } catch(err) { alert("Invalid build file"); }
    };
    reader.readAsText(file);
    this.value="";
  });

  $("#shareBtn")["on"]("click",function() {
    var state=saveBuild();
    var encoded=btoa(unescape(encodeURIComponent(JSON.stringify(state))));
    var url=location.origin+location.pathname+"#build="+encoded;
    if(navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function(){alert("Link copied to clipboard!");});
    } else {
      prompt("Copy this link:",url);
    }
    location.hash="build="+encoded;
  });

  if(location.hash.indexOf("#build=")===0) {
    try {
      var encoded=location.hash.substring(7);
      var json=decodeURIComponent(escape(atob(encoded)));
      var state=JSON.parse(json);
      setTimeout(function(){loadBuild(state);},500);
    } catch(e) {}
  }
}
