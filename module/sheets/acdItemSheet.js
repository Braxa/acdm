export default class acdItemSheet extends ItemSheet{
	get template() {
		return `systems/acd/templates/sheets/${this.item.data.type}-sheet.html`;
	}
	getData(){
		const data = super.getData();
		
		data.config = CONFIG.acd;
		
		return data;
	}
}