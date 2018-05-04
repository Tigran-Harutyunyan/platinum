export default {
    name: 'pl-header',
    data() {
        return {
            locales: [
                {
                    localeName: 'ՀԱՅ',
                    activeLocale: false,
                    locale: 'hy'
                },
                {
                    localeName: 'ENG',
                    activeLocale: true,
                    locale: 'en'
                }
            ]
        }
    },
    methods: {
        toggleLang(locale) {
            this.$root._i18n.locale = locale;
            this.locales.forEach(item => {
                item.activeLocale = item.locale == locale;
            })
        }
    }
}
