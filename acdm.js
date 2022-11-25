 import acdmItemSheet from "./module/sheets/acdmItemSheet.js";
 import acdmItemSheet, {acdm} from "./module/sheets/acdmItemSheet.js"
 
 Hooks.once("init", function(){
	 console.log("acdm | Initialising Academic system");
	 
	 CONFIG.acdm = acdm;
	 
	 Items.unregisterSheet("core", ItemSheet);
	 Items.registerSheet("acdm", acdmItemSheet, {makeDefault:true});
	 
 });