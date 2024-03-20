/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisense.js" />

/* TempusDominus datetimepicker extension Created by the Eonasdan (Jonathan Peterson) */
/* Build with https://getdatepicker.com/ */

/*****************************************************
<!-- Popperjs -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha256-BRqBN7dYgABqtY9Hd4ynE+1slnEw+roEPFzQ7TRRfcg=" crossorigin="anonymous"></script>
<!-- Tempus Dominus JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@eonasdan/tempus-dominus@6.2.10/dist/js/tempus-dominus.min.js" crossorigin="anonymous"></script>
<!-- Tempus Dominus Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eonasdan/tempus-dominus@6.2.10/dist/css/tempus-dominus.min.css" crossorigin="anonymous">
********************************************************/

var aasLocalizations = {

    en: {
        today: 'Go to today',
        clear: 'Clear selection',
        close: 'Close the picker',
        selectMonth: 'Select Month',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        selectYear: 'Select Year',
        previousYear: 'Previous Year',
        nextYear: 'Next Year',
        selectDecade: 'Select Decade',
        previousDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        previousCentury: 'Previous Century',
        nextCentury: 'Next Century',
        pickHour: 'Pick Hour',
        incrementHour: 'Increment Hour',
        decrementHour: 'Decrement Hour',
        pickMinute: 'Pick Minute',
        incrementMinute: 'Increment Minute',
        decrementMinute: 'Decrement Minute',
        pickSecond: 'Pick Second',
        incrementSecond: 'Increment Second',
        decrementSecond: 'Decrement Second',
        toggleMeridiem: 'Toggle Meridiem',
        selectTime: 'Select Time',
        selectDate: 'Select Date',
        dayViewHeaderFormat: { month: 'long', year: '2-digit' },
        locale: 'en-US',
        format: 'MM/dd/yyyy',
        startOfTheWeek: 0,
        hourCycle: 'h12'
    },
    fr: {
        today: "Aujourd'hui",
        clear: 'Effacer',
        close: 'Fermer',
        selectMonth: 'Choisir mois',
        previousMonth: 'Mois précédent',
        nextMonth: 'Mois suivant',
        selectYear: 'Select Year',
        previousYear: 'Année précédente',
        nextYear: 'Année suivante',
        selectDecade: 'Choisir décennie',
        previousDecade: 'Décennie précédente',
        nextDecade: 'Décennie Decade',
        previousCentury: 'Siècle précédent',
        nextCentury: 'Siècle suivant',
        pickHour: 'Choisir heure',
        incrementHour: 'Incrémenter heures',
        decrementHour: 'Décrémenter heures',
        pickMinute: 'Choisir minute',
        incrementMinute: 'Incrémenter minutes',
        decrementMinute: 'Décrémenter minutes',
        pickSecond: 'Choisir second',
        incrementSecond: 'Incrémenter seconds',
        decrementSecond: 'Décrémenter seconds',
        toggleMeridiem: 'Toggle Meridiem',
        selectTime: "Choisir l'heure",
        selectDate: 'Choisir la date',
        dayViewHeaderFormat: { month: 'long', year: '4-digit' },
        locale: 'fr-FR',
        format: 'dd/MM/yyyy',
        startOfTheWeek: 1,
        hourCycle: 'h24'
    }
};

Aspectize.Extend("DateTimePicker", {
    Properties: { Value: null, MinDate: new Date(0), MaxDate: new Date(0), Stepping: 1, Format: '', Inline: false, ViewMode: 'calendar', UseCurrent: true, SideBySide: false, DefaultDate: new Date(0), Locale: 'fr', Debug: false },
    Events: ['OnValueChanged'],
    Init: function (elem) {

        var inPropertyChangeObserver = false;
        var dtPicker = null;

        var dtInput = elem.querySelector('input');

        function updateDatPickerOptions(arg) {

            var options = {
                restrictions: {},
                display: {}
            };

            if (arg) {

                if ('UseCurrent' in arg) {
                    dtPicker.updateOptions({
                        useCurrent: arg.UseCurrent
                    }, false);
                }

                if ('DefaultDate' in arg) {
                    var defaultDate = arg.DefaultDate;
                    if (defaultDate === null || defaultDate.valueOf() === 0) defaultDate = undefined;

                    dtPicker.updateOptions({
                        defaultDate: defaultDate
                    }, false);
                }

                if (('MinDate' in arg) && ('MaxDate' in arg)) {
                    dtPicker.updateOptions({
                        restrictions: {
                            minDate: undefined,
                            maxDate: undefined
                        }
                    }, false);
                }

                if ('MinDate' in arg) {
                    var mindate = arg.MinDate;
                    if (arg.MinDate === null || arg.MinDate.valueOf() === 0) mindate = undefined;

                    dtPicker.updateOptions({
                        restrictions: {
                            minDate: minDate
                        }
                    }, false);
                }

                if ('MaxDate' in arg) {
                    var maxdate = arg.MaxDate
                    if (arg.MaxDate === null || arg.MaxDate.valueOf() === 0) maxdate = undefined;

                    dtPicker.updateOptions({
                        restrictions: {
                            maxdate: maxdate
                        }
                    }, false);
                }

                if ('Stepping' in arg) {
                    var stepping = arg.Stepping || 1;
                    dtPicker.updateOptions({
                        stepping: stepping
                    }, false);
                }

                if ('Format' in arg) {
                    dtPicker.updateOptions({
                        localization: {
                            format: arg.Format || 'dd/MM/yyyy HH:mm'
                        }
                    }, false);
                }

                if ('Inline' in arg) {
                    dtPicker.updateOptions({
                        display: {
                            inline: arg.Inline
                        }
                    }, false);
                }

                if ('ViewMode' in arg) {
                    dtPicker.updateOptions({
                        display: {
                            viewMode: arg.ViewMode || 'calendar'
                        }
                    }, false);
                }

                if ('Locale' in arg) {
                    dtPicker.updateOptions({
                        localization: {
                            locale: arg.Locale || 'fr'
                        }
                    }, false);
                }

                if ('Debug' in arg) {
                    dtPicker.updateOptions({
                        debug: !!arg.Debug
                    }, false);
                }

                if ('SideBySide' in arg) {
                    dtPicker.updateOptions({
                        display: {
                            sideBySide: arg.SideBySide
                        }
                    }, false);
                }

                return null;

            } else {

                var minDate = Aspectize.UiExtensions.GetProperty(elem, 'MinDate');
                var maxDate = Aspectize.UiExtensions.GetProperty(elem, 'MaxDate');

                var debug = Aspectize.UiExtensions.GetProperty(elem, 'Debug') || false;   /* Use debug = true to keep picker open and inspect control */

                var stepping = Aspectize.UiExtensions.GetProperty(elem, 'Stepping') || 1;
                var useCurrent = Aspectize.UiExtensions.GetProperty(elem, 'UseCurrent');
                var defaultDate = Aspectize.UiExtensions.GetProperty(elem, 'DefaultDate');
                var sideBySide = !!Aspectize.UiExtensions.GetProperty(elem, 'SideBySide');
                var viewMode = Aspectize.UiExtensions.GetProperty(elem, 'ViewMode') || 'calendar';   // 'clock' | 'calendar' | 'months' | 'years' | 'decades'
                var inline = !!Aspectize.UiExtensions.GetProperty(elem, 'Inline');

                var locale = Aspectize.UiExtensions.GetProperty(elem, 'Locale') || Aspectize.CultureInfo.GetCurrentLanguageAndRegion();
                var format = Aspectize.UiExtensions.GetProperty(elem, 'Format') || Aspectize.CultureInfo.GetRegionInfo().dateFormat;

                options.restrictions.minDate = minDate.valueOf() === 0 ? undefined : minDate;
                options.restrictions.maxDate = maxDate.valueOf() === 0 ? undefined : maxDate;

                options.debug = debug;
                options.keepInvalid = true;
                options.stepping = stepping;
                options.useCurrent = useCurrent;
                options.defaultDate = defaultDate.valueOf() === 0 ? undefined : defaultDate;
                options.allowInputToggle = true;

                options.display.sideBySide = sideBySide;
                options.display.viewMode = viewMode;
                options.display.inline = inline;
                options.display.calendarWeeks = false;
                options.display.buttons = { today: false, clear: false, close: false };

                var clock = /hh?|HH?|mm?|ss?/.test(format);
                var calendar = /d|M|y/.test(format);

                options.display.components = {
                    calendar: calendar, date: true, month: true, year: true, decades: true,
                    clock: clock, hours: true, minutes: true, seconds: false
                };

                var fr = locale.startsWith('fr');
                var hourCycle = fr ? 'h23' : undefined; // 'h11' | 'h12' | 'h23' | 'h24' 
                var startOfTheWeek = fr ? 1 : 0; // 1 = Monday

                options.localization = { locale: locale, format: format, hourCycle: hourCycle, startOfTheWeek, startOfTheWeek };

                return options;
            }
        }

        function newPicker() {

            if (dtPicker) {
                dtPicker.dispose();
                dtPicker = null;
            }

            var options = updateDatPickerOptions(null);
            dtPicker = new tempusDominus.TempusDominus(elem, options);

            var currentDate = Aspectize.UiExtensions.GetProperty(elem, 'Value');
            if (currentDate) {
                if (typeof currentDate === 'string') {
                    currentDate = dtPicker.dates.parseInput(currentDate);
                }

                var dt = tempusDominus.DateTime.convert(currentDate, options.localization.locale);

                dtPicker.dates.setValue(dt);
            }

            dtPicker.subscribe(tempusDominus.Namespace.events.change, function (e) {

                if (e.isValid) {

                    dtInput.className = dtInput.className.replace(' inError', '');
                    dtInput.title = '';

                    var value = null;
                    if (e.date) {
                        value = e.date;              
                    }
                    var format = Aspectize.UiExtensions.GetProperty(elem, 'Format');

                    var dt = new Date(value.valueOf());
                    Aspectize.UiExtensions.ChangeProperty(elem, 'Value', dt);

                } else dtInput.className += ' inError';
            });

            dtPicker.subscribe(tempusDominus.Namespace.events.error, function (e) {

                dtInput.title = e.reason;                
            });

            dtPicker.dates.formatInput = function (dateValue) {

                var format = dtPicker.optionsStore.options.localization.format;
                var dt = new Date(dateValue.valueOf());
                return Aspectize.Util.FormatString('{0:' + format + '}', dt);

            };

            dtPicker.dates.parseInput = function (s) {

                var format = dtPicker.optionsStore.options.localization.format;
                var dt = Aspectize.parseString(s, 'Date', format);

                var yy = dt.getYear();
                if (yy < 100) {

                    dt.setFullYear(2000 + yy);
                }
                return tempusDominus.DateTime.convert(dt);
            };

        }

        Aspectize.UiExtensions.AddMergedPropertyChangeObserver(elem, function (sender, arg) {

            if (inPropertyChangeObserver) return;
            inPropertyChangeObserver = true;
            try {
                if (!dtPicker) {

                    newPicker();

                } else {

                    updateDatPickerOptions(arg);

                    if ('Value' in arg) {
                        var currentDate = arg.Value;

                        if (currentDate) {
                            if (typeof currentDate === 'string') {
                                currentDate = dtPicker.dates.parseInput(currentDate);
                            }
                            var format = Aspectize.UiExtensions.GetProperty(elem, 'Format');
                            var dt = tempusDominus.DateTime.convert(currentDate);

                            dtPicker.dates.setValue(dt);
                        }
                    }
                }

            } finally {
                inPropertyChangeObserver = false;
            }
        });
    }
});

