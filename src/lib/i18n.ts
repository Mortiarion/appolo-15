import { register, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';

register('uk', () => import('$lib/translations/uk.json'));
register('en', () => import('$lib/translations/en.json'));
register('ru', () => import('$lib/translations/ru.json'));

init({
	fallbackLocale: 'uk',
	initialLocale: getLocaleFromNavigator()
});

export { $locale };
