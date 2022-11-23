export default class acdmItemSheet extends ItemSheet{
	get template() {
		return `systems/acdm/templates/sheets/${this.item.data.type}-sheet.html`;
	}
	getData(){
		const data = super.getData();
		
		data.config = CONFIG.acdm;
		
		return data;
	}
}