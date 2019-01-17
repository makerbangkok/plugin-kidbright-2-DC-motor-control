Blockly.Blocks["blink.left"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.BLINK_LEFT_TITLE);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(160);
		this.setTooltip(Blockly.Msg.BLINK_LEFT_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_LEFT_HELPURL);
	}
};

Blockly.Blocks["blink.right"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.BLINK_RIGHT_TITLE);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(160);
		this.setTooltip(Blockly.Msg.BLINK_RIGHT_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_RIGHT_HELPURL);
	}
};
Blockly.Blocks["blink.up"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.BLINK_UP_TITLE);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(160);
		this.setTooltip(Blockly.Msg.BLINK_UP_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_UP_HELPURL);
	}
};
Blockly.Blocks["blink.down"] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.BLINK_DOWN_TITLE);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(160);
		this.setTooltip(Blockly.Msg.BLINK_DOWN_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.BLINK_DOWN_HELPURL);
	}
};
