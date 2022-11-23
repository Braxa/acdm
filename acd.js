 import acdItemSheet from "./module/sheets/acdItemSheet.js"
 import {acd} from "./module/sheets/acdItemSheet.js"
 
 Hooks.once("init", function(){
	 console.log("acd | Initialising Academic system");
	 
	 CONFIG.acd = acd;
	 
	 Items.unregisterSheet("core", ItemSheet);
	 Items.registerSheet("acd", acdItemSheet, {makeDefault:true});
	 
 });