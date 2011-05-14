/* Spanish initialisation for the jQuery UI date picker plugin. */
/* Written by Alfonso Gómez-Arzola (alfonso@agarzola.com)  */
jQuery(function($){
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3c;Anterior',
		nextText: 'Próximo&#x3e;',
		currentText: 'Actual',
		monthNames: ['enero','febrero','marzo','abril','mayo','junio',
		'julio','agosto','septiembre','octubre','noviembre','diciembre'],
		monthNamesShort: ['ene','feb','mar','abr','may','jun',
		'jul','ago','sep','oct','nov','dic'],
		dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
		dayNamesShort: ['dom','lun','mar','mié','jue','vie','sáb'],
		dayNamesMin: ['do','lu','ma','mi','ju','vi','sá'],
		dateFormat: 'dd/mm/yy', firstDay: 1,
		isRTL: false};
});