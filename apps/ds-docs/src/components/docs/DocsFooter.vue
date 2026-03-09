<script setup lang="ts">
/**
 * DocsFooter
 *
 * Documentation footer component with user preferences section.
 * Contains Language Switcher and Theme Switcher grouped as preferences.
 * Also includes social links and copyright.
 */

import { computed } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import DocsIcon from './DocsIcon.vue';
import { getDefaultLanguage } from '@/config';
import { t } from '@/lib/i18n';

interface Props {
  /** Current language */
  language?: string;
  /** Last updated date (optional) */
  lastUpdated?: string;
}

const props = withDefaults(defineProps<Props>(), {
  language: () => getDefaultLanguage(),
});

// Translated labels
const preferencesLabel = computed(() => t('footer.preferences', props.language));
const languageLabel = computed(() => t('footer.language', props.language));
const themeLabel = computed(() => t('footer.theme', props.language));
const copyrightText = computed(() => t('footer.copyright', props.language));
const lastUpdatedLabel = computed(() => t('footer.lastUpdated', props.language));

// Current year for copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="docs-footer border-t border-gray-200 bg-surface">
    <div class="docs-footer__content px-6 py-6">

      <!-- Footer Bottom -->
      <div class="docs-footer__bottom">
        <div class="docs-footer__bottom-content flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div class="flex flex-row gap-4">
            <!-- Preferences Section -->
            <div class="docs-footer__preferences">
                <!-- <span class="docs-footer__section-label">
                {{ preferencesLabel }}
                </span> -->
                <div class="docs-footer__preferences-group flex gap-3">
                    <!-- Language Preference -->
                    <div class="docs-footer__preference">
                        <!-- <span class="docs-footer__preference-label">
                        {{ languageLabel }}
                        </span> -->
                        <LanguageSwitcher :current-language="language" />
                    </div>

                    <!-- Theme Preference -->
                    <div class="docs-footer__preference">
                        <!-- <span class="docs-footer__preference-label">
                        {{ themeLabel }}
                        </span> -->
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>

            <!-- Social Links -->
            <div class="docs-footer__social flex items-center gap-4">
                <a
                href="https://github.com/aziontech/webkit"
                target="_blank"
                rel="noopener noreferrer"
                class="docs-footer__social-link text-text-secondary hover:text-text-primary transition-colors"
                aria-label="View on GitHub"
                >
                <DocsIcon name="pi-github" size="lg" decorative />
                </a>
                <a
                href="https://twitter.com/aziontech"
                target="_blank"
                rel="noopener noreferrer"
                class="docs-footer__social-link text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Follow on Twitter"
                >
                <DocsIcon name="pi-twitter" size="lg" decorative />
                </a>
                <a
                href="https://www.linkedin.com/company/aziontech"
                target="_blank"
                rel="noopener noreferrer"
                class="docs-footer__social-link text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Follow on LinkedIn"
                >
                <DocsIcon name="pi-linkedin" size="lg" decorative />
                </a>
            </div>
        </div>

          <!-- Last Updated (optional) -->
          <div v-if="lastUpdated" class="docs-footer__updated text-xs text-text-muted">
            {{ lastUpdatedLabel }}: {{ lastUpdated }}
          </div>

          <!-- Copyright -->
          <div class="docs-footer__copyright text-xs text-text-foreground font-mono">
            © {{ currentYear }} {{ copyrightText }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.docs-footer {
  margin-top: auto;
}

.docs-footer__content {
  /* max-width: 80rem; */
}

.docs-footer__preferences {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.docs-footer__section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary, #6b7280);
}

.docs-footer__preference {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.docs-footer__preference-label {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #6b7280);
}

.docs-footer__bottom-content {
  width: 100%;
}

.docs-footer__social {
  display: flex;
  align-items: center;
}

.docs-footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
}

.docs-footer__social-link:hover {
  color: var(--color-primary, #2563eb);
}
</style>
