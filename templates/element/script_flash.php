		function flashMessage(title, text, status) {
			new Notify({
				status: status,
				title: title,
				text: text,
				effect: 'slide',
				speed: 300,
				customClass: '',
				customIcon: '',
				showIcon: true,
				showCloseButton: true,
				autoclose: true,
				autotimeout: 3000,
				notificationsGap: null,
				notificationsPadding: null,
				position: 'bottom left',
				type: 'outline',	// outline, filled
				customWrapper: ''
			})
		}		
