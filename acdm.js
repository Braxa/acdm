 import acdItemSheet from "./module/sheets/acdmItemSheet.js"
 import {acdm} from "./module/sheets/acdmItemSheet.js"
 
 Hooks.once("init", function(){
	 console.log("acdm | Initialising Academic system");
	 
	 CONFIG.acdm = acdm;
	 
	 Items.unregisterSheet("core", ItemSheet);
	 Items.registerSheet("acd", acdmItemSheet, {makeDefault:true});
	 
 });