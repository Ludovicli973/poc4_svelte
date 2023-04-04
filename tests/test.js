import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
	// Avant chaque test, on charge la page de l'URL localhost:5174
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:5174/');
	});
	// Test principal pour la navigation
	test('main navigation', async ({ page }) => {
		// On s'assure que l'URL est correcte
		await expect(page).toHaveURL('http://localhost:5174/');
		// On s'assure que les animés sont bien affichés avec un attribut alt correspondant
		await expect(page.getByAltText('poster')).toHaveCount(30);
		// On recherche un élément contenant le texte "Fullmetal" et on remplit ce champ de saisie
		await page.getByPlaceholder('Search').fill('Fullmetal');
		// On clique sur le bouton ayant pour texte "Search"
		await page.locator('button', { hasText: 'Search' }).click();
		// On vérifie qu'on a maintenant un seul animé est affiché avec l'attribut alt correspondant
		await expect(page.getByAltText('poster')).toHaveCount(1);
		// On clique sur l'animé affiché
		await page.getByAltText('poster').click();
		// On s'assure que l'URL a changé en conséquence
		await expect(page).toHaveURL('http://localhost:5174/details/5114');
		// On s'assure que le texte "Fullmetal Alchemist: Brotherhood" est visible sur la page
		await expect(page.getByText('Fullmetal Alchemist: Brotherhood', { exact: true })).toBeVisible();
		// On s'assure que le texte complet est visible sur la page
		await expect(
			page.getByText(
				`After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world`
			)
		).toBeVisible();
	});
});
