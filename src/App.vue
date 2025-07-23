<template>
  <v-app>
    <v-app-bar app color="blue-grey-darken-4">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

      <v-toolbar-title class="font-weight-bold">AHMET YAVUZ</v-toolbar-title>
      <v-spacer />

      <div class="d-none d-md-flex">
        <v-btn href="#anasayfa" text>Anasayfa</v-btn>
        <v-btn href="#hakkimda" text>Hakkımda</v-btn>
        <v-btn href="#yetenekler" text>Yetenekler</v-btn>
        <v-btn href="#projeler" text>Projeler</v-btn>
        <v-btn href="#egitim-tecrube" text>Eğitim & Tecrübe</v-btn>
        <v-btn href="#iletisim" text>İletişim</v-btn>
      </div>

      <v-btn class="d-none d-md-flex" icon @click="toggleTheme">
        <v-icon>{{ currentTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item href="#anasayfa" link @click="drawer = false">
          <v-list-item-title>Anasayfa</v-list-item-title>
        </v-list-item>
        <v-list-item href="#hakkimda" link @click="drawer = false">
          <v-list-item-title>Hakkımda</v-list-item-title>
        </v-list-item>
        <v-list-item href="#yetenekler" link @click="drawer = false">
          <v-list-item-title>Yetenekler</v-list-item-title>
        </v-list-item>
        <v-list-item href="#projeler" link @click="drawer = false">
          <v-list-item-title>Projeler</v-list-item-title>
        </v-list-item>
        <v-list-item href="#egitim-tecrube" link @click="drawer = false">
          <v-list-item-title>Eğitim & Tecrübe</v-list-item-title>
        </v-list-item>
        <v-list-item href="#iletisim" link @click="drawer = false">
          <v-list-item-title>İletişim</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="toggleTheme">
          <template #prepend>
            <v-icon>{{ currentTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
          </template>
          <v-list-item-title>{{ currentTheme === 'light' ? 'Karanlık Moda Geç' : 'Aydınlık Moda Geç' }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <section
        id="anasayfa"
        class="d-flex align-center justify-center text-center py-16 px-4 text-white"
        style="
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.imgur.com/dfs5CM3.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 80vh;
          position: relative;
          overflow: hidden;
        "
      >
        <v-container class="relative z-10">
          <v-avatar class="mb-6 elevation-8" size="180">
            <v-img alt="Ahmet Yavuz Profil Fotoğrafı" src="https://i.imgur.com/Rh17zDH.jpeg" />
          </v-avatar>

          <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold mb-4 animate__animated animate__fadeInDown">
            Merhaba, Ben <span class="text-blue-lighten-2">Ahmet Yavuz</span>
          </h1>
          <h2 class="text-h6 text-sm-h5 font-weight-regular mx-auto mb-8 animate__animated animate__fadeInUp" style="max-width: 800px;">
            Bilgisayar Mühendisliği son sınıf öğrencisiyim. Teorik bilgimi pratik projelerle pekiştirerek teknolojiye olan tutkumu somut çıktılara dönüştürmeyi hedefliyorum.
          </h2>

          <div class="d-flex justify-center flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-1s">
            <v-btn
              class="ma-2 text-none"
              color="blue-lighten-2"
              download="Ahmet_Yavuz_CV.pdf"
              elevation="6"
              href="https://drive.google.com/uc?export=download&id=1LwqTwRYc25fANyiIvK7fIAKlMjS_ARH"
              rounded
              x-large
            >
              <v-icon start>mdi-download</v-icon> Özgeçmişim
            </v-btn>

            <v-btn
              class="ma-2 text-none"
              color="blue-darken-4"
              elevation="6"
              href="#iletisim"
              outlined
              rounded
              x-large
            >
              <v-icon start>mdi-email</v-icon> Bana Ulaşın
            </v-btn>
          </div>
        </v-container>
      </section>

      <section id="hakkimda" class="py-12 px-4" :class="hakkimdaBgClass">
        <v-container>
          <h2 class="text-h4 text-md-h3 text-center mb-8 font-weight-bold">Hakkımda</h2>
          <v-row align="start">
            <v-col class="text-center" cols="12" md="4">
              <v-img
                alt="Hakkımda Görseli"
                aspect-ratio="auto"
                class="rounded-lg elevation-6"
                cover
                src="https://i.imgur.com/iiRRaUk.jpeg"
              />
            </v-col>
            <v-col class="d-flex flex-column justify-start" cols="12" md="7">
              <p class="text-body-1 mb-2">
                Bilgisayar Mühendisliği son sınıf öğrencisi olarak kariyerimde ölçeklenebilir, yüksek performanslı ve güvenilir yazılım sistemleri geliştirmeye odaklanmış bir profesyonel olmayı hedefliyorum. Özellikle hızlı API servisleri için Fastify ve modern veri tabanı çözümleri (örn. PostgreSQL, MongoDB) konusunda bilgi ve deneyim kazanmaya büyük önem veriyorum.
              </p>
              <p class="text-body-1 mt-2 mb-4">
                Eğitim sürecimde, Polonya'da katıldığım Erasmus programı sayesinde hem kültürel birikimimi artırdım hem de İngilizce iletişim becerilerimi üst seviyeye taşıdım. Ön yüz teknolojilerine (Vue.js, TypeScript, Vuetify) olan ilgimi korurken, asıl tutkum karmaşık backend problemlerine efektif ve zarif çözümler sunmaktır. Sürekli öğrenmeye ve teknolojik gelişmeleri yakından takip etmeye olan inancımla, projelerime değer katmayı ve sektörde fark yaratmayı amaçlıyorum.
              </p>

              <v-card class="mt-auto pa-4 elevation-2 rounded-lg" :color="currentTheme === 'light' ? 'grey-lighten-4' : 'grey-darken-3'">
                <v-list class="bg-transparent" dense>
                  <v-list-item>
                    <template #prepend><v-icon color="blue-darken-2">mdi-cake-variant</v-icon></template>
                    <v-list-item-title class="font-weight-medium">Doğum Tarihim:</v-list-item-title>
                    <v-list-item-subtitle>03 Kasım 2000</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend><v-icon color="blue-darken-2">mdi-map-marker</v-icon></template>
                    <v-list-item-title class="font-weight-medium">Yaşadığım Şehir:</v-list-item-title>
                    <v-list-item-subtitle>Ankara</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item href="mailto:yavuzahmet703@gmail.com">
                    <template #prepend><v-icon color="blue-darken-2">mdi-email</v-icon></template>
                    <v-list-item-title class="font-weight-medium">E-Mail Adresim:</v-list-item-title>
                    <v-list-item-subtitle>yavuzahmet703@gmail.com</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template #prepend><v-icon color="blue-darken-2">mdi-shield-account</v-icon></template>
                    <v-list-item-title class="font-weight-medium">Askerlik Durumum:</v-list-item-title>
                    <v-list-item-subtitle>Tecilli (31/12/2028)</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
              <div
                class="badge-base LI-profile-badge mt-4"
                data-locale="tr_TR"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="dev-ahmet-yavuz"
                data-version="v1"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="yetenekler" class="py-12 px-4" :class="yeteneklerBgClass">
        <v-container>
          <h2 class="text-h4 text-md-h3 text-center mb-8 font-weight-bold">Yetenekler</h2>
          <v-row justify="center">
            <v-col
              v-for="(skill, i) in skills"
              :key="i"
              cols="12"
              lg="3"
              md="4"
              sm="6"
            >
              <v-card class="pa-4 text-center elevation-4 rounded-lg">
                <v-icon color="blue-darken-2" size="60">{{ skill.icon }}</v-icon>
                <v-card-title class="justify-center text-h6 font-weight-bold">{{ skill.name }}</v-card-title>
                <v-card-text>{{ skill.description }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="projeler" class="py-12 px-4" :class="projelerBgClass">
        <v-container>
          <h2 class="text-h4 text-md-h3 text-center mb-8 font-weight-bold">Projeler</h2>
          <v-row justify="center">
            <v-col
              v-for="(project, i) in projects"
              :key="i"
              cols="12"
              lg="4"
              md="6"
            >
              <v-card class="elevation-4 rounded-lg">
                <v-img cover height="200px" :src="project.image" />
                <v-card-title class="font-weight-bold">{{ project.title }}</v-card-title>
                <v-card-text>
                  {{ project.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="blue-darken-2" :href="project.link" target="_blank" text>
                    Görüntüle <v-icon right>mdi-link</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="egitim-tecrube" class="py-12 px-4" :class="egitimTecrubeBgClass">
        <v-container>
          <h2 class="text-h4 text-md-h3 text-center mb-8 font-weight-bold">Eğitim ve Tecrübelerim</h2>

          <h3 class="text-h5 text-md-h4 text-center mb-6 mt-10 font-weight-bold text-blue-darken-2">Eğitim</h3>
          <div v-if="!isMobile">
            <v-timeline align="start" class="mb-10" side="end">
              <v-timeline-item
                v-for="(edu, i) in education"
                :key="i"
                :dot-color="edu.color"
                icon="mdi-school"
                size="small"
              >
                <template #opposite>
                  <span class="font-weight-bold">{{ edu.date }}</span>
                </template>
                <v-card class="elevation-2 rounded-lg pa-4">
                  <v-card-title class="text-h6 font-weight-bold">{{ edu.degree }}</v-card-title>
                  <v-card-subtitle class="text-body-2">{{ edu.institution }}</v-card-subtitle>
                  <v-card-text>
                    <p>{{ edu.description }}</p>
                    <p v-if="edu.gpa" class="text-caption mt-2">GPA: {{ edu.gpa }}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>

          <div v-else>
            <v-row justify="center">
              <v-col
                v-for="(edu, i) in education"
                :key="i"
                cols="12"
              >
                <v-card class="elevation-2 rounded-lg pa-4 mb-4">
                  <v-card-title class="text-h6 font-weight-bold">{{ edu.degree }}</v-card-title>
                  <v-card-subtitle class="text-body-2">{{ edu.institution }}</v-card-subtitle>
                  <v-card-text>
                    <p class="text-caption font-weight-bold mb-2">{{ edu.date }}</p>
                    <p>{{ edu.description }}</p>
                    <p v-if="edu.gpa" class="text-caption mt-2">GPA: {{ edu.gpa }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <h3 class="text-h5 text-md-h4 text-center mb-6 mt-10 font-weight-bold text-blue-darken-2">Tecrübe</h3>
          <div v-if="!isMobile">
            <v-timeline align="start" side="end">
              <v-timeline-item
                v-for="(exp, i) in experience"
                :key="i"
                :dot-color="exp.color"
                icon="mdi-briefcase"
                size="small"
              >
                <template #opposite>
                  <span class="font-weight-bold">{{ exp.date }}</span>
                </template>
                <v-card class="elevation-2 rounded-lg pa-4">
                  <v-card-title class="text-h6 font-weight-bold">{{ exp.position }}</v-card-title>
                  <v-card-subtitle class="text-body-2">{{ exp.company }}</v-card-subtitle>
                  <v-card-text>
                    <ul class="ml-4">
                      <li v-for="(detail, index) in exp.details" :key="index" class="text-body-2 mb-1">- {{ detail }}</li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>

          <div v-else>
            <v-row justify="center">
              <v-col
                v-for="(exp, i) in experience"
                :key="i"
                cols="12"
              >
                <v-card class="elevation-2 rounded-lg pa-4 mb-4">
                  <v-card-title class="text-h6 font-weight-bold">{{ exp.position }}</v-card-title>
                  <v-card-subtitle class="text-body-2">{{ exp.company }}</v-card-subtitle>
                  <v-card-text>
                    <p class="text-caption font-weight-bold mb-2">{{ exp.date }}</p>
                    <ul class="ml-4">
                      <li v-for="(detail, index) in exp.details" :key="index" class="text-body-2 mb-1">- {{ detail }}</li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </section>

      <section id="iletisim" class="py-12 px-4" :class="iletisimBgClass">
        <v-container>
          <h2 class="text-h4 text-md-h3 text-center mb-8 font-weight-bold">Bana Ulaşın</h2>
          <div class="text-center mt-8">
            <v-btn class="mx-2" href="https://www.instagram.com/imahmetyavuz/" icon>
              <v-icon size="36">mdi-instagram</v-icon>
            </v-btn>
            <v-btn class="mx-2" href="https://www.linkedin.com/in/dev-ahmet-yavuz/" icon target="_blank">
              <v-icon size="36">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn class="mx-2" href="https://github.com/AhmetYavuz0/" icon target="_blank">
              <v-icon size="36">mdi-github</v-icon>
            </v-btn>
            <v-btn class="mx-2" href="mailto:yavuzahmet703@gmail.com" icon>
              <v-icon size="36">mdi-email</v-icon>
            </v-btn>
          </div>
        </v-container>
      </section>
    </v-main>

    <v-footer color="blue-grey-darken-4" padless>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} — Tüm hakları saklıdır.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { useTheme } from 'vuetify'

  const drawer = ref(false)
  const isMobile = ref(false)

  const theme = useTheme()
  const currentTheme = computed(() => theme.global.name.value)

  const toggleTheme = () => {
    theme.global.name.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  // Dinamik arka plan sınıfları
  const hakkimdaBgClass = computed(() => currentTheme.value === 'light' ? 'grey lighten-5' : 'grey darken-4')
  const yeteneklerBgClass = computed(() => currentTheme.value === 'light' ? 'blue-grey-lighten-5' : 'blue-grey-darken-3')
  const projelerBgClass = computed(() => currentTheme.value === 'light' ? 'grey lighten-5' : 'grey darken-4')
  const egitimTecrubeBgClass = computed(() => currentTheme.value === 'light' ? 'blue-grey-lighten-5' : 'blue-grey-darken-3')
  const iletisimBgClass = computed(() => 'blue-grey-darken-4') // Sadeleştirildi

  const checkScreenSize = () => {
    isMobile.value = window.innerWidth < 960
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)
  })

  // Yetenekler verisi (değişmedi)
  const skills = ref([
    {
      name: 'Vue.js',
      icon: 'mdi-vuejs',
      description: 'Modern ve reaktif web uygulamaları geliştirme',
    },
    {
      name: 'TypeScript',
      icon: 'mdi-language-typescript',
      description: 'Güvenli ve ölçeklenebilir kod yazma',
    },
    {
      name: 'HTML & CSS',
      icon: 'mdi-language-html5',
      description: 'Web sayfaları tasarlama ve stilize etme',
    },
    {
      name: 'Fastify',
      icon: 'mdi-lightning-bolt',
      description: 'Hızlı ve düşük maliyetli API geliştirme',
    },
    {
      name: '.NET Core',
      icon: 'mdi-language-csharp',
      description: 'Çapraz platform uygulamalar geliştirme',
    },
    {
      name: 'Entity Framework',
      icon: 'mdi-database-search',
      description: 'Veri tabanı ile nesne ilişkisel eşleme (ORM)',
    },
    {
      name: 'Drizzle ORM',
      icon: 'mdi-code-braces',
      description: 'TypeScript/JavaScript için modern ve tipli ORM çözümü',
    },
    {
      name: 'Docker',
      icon: 'mdi-docker',
      description: 'Uygulama kapsülleme ve dağıtımı',
    },
    {
      name: 'Veritabanları',
      icon: 'mdi-database',
      description: 'Veritabanı tasarımı ve yönetimi',
    },
    {
      name: 'Git & GitHub',
      icon: 'mdi-git',
      description: 'Versiyon kontrolü ve işbirliği',
    },
    {
      name: 'İleri Seviye İngilizce',
      icon: 'mdi-translate',
      description: 'İletişim ve teknik dokümantasyon için akıcı İngilizce bilgisi.',
    },
  ])

  // Projeler verisi (değişmedi)
  const projects = ref([
    {
      title: 'To-Do Web Application',
      description: 'Kullanıcıların kişisel görevlerini güvenli bir şekilde yönetebileceği, TypeScript ile geliştirilmiş tam teşekküllü bir web uygulamasıdır. JWT tabanlı kimlik doğrulama ile kullanıcı kaydı ve güvenli oturum yönetimi sunan bu proje, giriş yapan kullanıcılara kendi görevlerini ekleme, silme ve düzenleme imkanı tanır. Bu uygulama, modern web geliştirme ve güvenli backend mimarisi yeteneklerimi sergilemektedir.',
      image: 'https://i.imgur.com/bHM7XyW.jpeg',
      link: 'https://github.com/AhmetYavuz0/ToDo-App',
    },
    {
      title: 'KriptoMatris',
      description: ' Üniversite eğitimimin ilk yılında C programlama diliyle geliştirdiğim bu uygulama, matris operasyonları aracılığıyla temel bir şifreleme algoritması uygulamaktadır. Bu proje, algoritma tasarım ve problem çözme becerilerimi geliştirmeye odaklandığım önemli bir adımdı ve bilgisayar bilimleri temellerine olan ilgimi yansıtmaktadır.',
      image: 'https://i.imgur.com/0SG1WkA.jpeg',
      link: 'https://github.com/AhmetYavuz0/Sifre-olustucu-cozucu',
    },
    {
      title: 'Spelling Bee Game',
      description: 'JavaFX kullanarak geliştirdiğim bu interaktif Spelling Bee oyunu, kullanıcıların kelime dağarcığını ve yazım becerilerini geliştirmeyi amaçlamaktadır. Proje, grafiksel kullanıcı arayüzü (GUI) tasarımı ve oyun mantığı geliştirme konusundaki yeteneklerimi sergilerken, aynı zamanda kullanıcı etkileşimli uygulamalar oluşturma deneyimimi pekiştirdi.',
      image: 'https://i.imgur.com/Xi4OqLJ.png',
      link: 'https://github.com/AhmetYavuz0/Spelling-bee-Game',
    },
  ])

  // Eğitim verisi (değişmedi)
  const education = ref([
    {
      degree: 'Bilgisayar Mühendisliği Lisans',
      institution: 'Erciyes Üniversitesi',
      date: 'Eylül 2020 - Devam Ediyor',
      description: 'Yazılım geliştirme, algoritma analizi ve veri tabanı tasarımı üzerine odaklanma.',
      gpa: '2.95/4.00',
      color: 'deep-purple-lighten-2',
    },
    {
      degree: 'İngilizce Hazırlık Diploması',
      institution: 'Erciyes Üniversitesi',
      date: 'Eylül 2019 - Haziran 2020',
      description: 'B2 Seviye İngilizce Eğitimi',
      gpa: '87/100',
      color: 'deep-purple-lighten-2',
    },
    {
      degree: 'Lise Diploması',
      institution: 'Final Anadolu Lisesi',
      date: 'Eylül 2018 - Haziran 2019',
      description: 'Fen bilimleri ve matematik ağırlıklı eğitim.',
      color: 'deep-purple-lighten-3',
    },
  ])

  // Tecrübe verisi (değişmedi)
  const experience = ref([
    {
      position: 'Intern Backend and Frontend Developer',
      company: 'Ekinoks Software',
      date: 'Şubat 2025 - Mart 2025',
      details: [
        'Node.js (Fastify) kullanarak yüksek performanslı API servisleri geliştirme.',
        'PostgreSQL veritabanı ile verimli veri yönetimi ve sorgu optimizasyonu yapma.',
        'Docker ile uygulama kapsülleme ve dağıtım süreçlerine destek olma.',
        'JWT kullanarak authorization işlemlerini kontrol etme.',
      ],
      color: 'blue-lighten-2',
    },
  ])

</script>

<style scoped>
/* Genel stil düzenlemeleri */
section {
  display: flex;
  align-items: center;
}

/* AppBar butonları için daha yumuşak geçiş */
.v-btn {
  transition: all 0.3s ease-in-out;
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Anasayfa arka planı için opaklık */
#anasayfa {
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

#anasayfa::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
}

#anasayfa .v-container {
  position: relative;
  z-index: 1;
}

/* Hakkımda bölümü için görsel placeholder'ı biraz daha iyi hale getirdim */
#hakkimda .v-img {
  max-width: 100%;
  height: auto;
}

/* Mobil uyumluluk için font boyutları */
@media (max-width: 960px) {
  .v-app-bar .v-toolbar-title {
    font-size: 1.25rem !important;
  }
  #anasayfa h1 {
    font-size: 2.5rem !important;
  }
  #anasayfa h2 {
    font-size: 1.1rem !important;
  }
  #anasayfa .v-btn {
    margin: 8px !important;
  }
}

/* Netlify Forms için gizli spam koruması */
/* Bu sınıfı, formdaki gizli bot-field P etiketine uygulayabilirsin */
.hidden {
  display: none !important;
}

/* Timeline maddelerindeki liste stili */
.v-timeline-item ul {
  list-style: none;
  padding-left: 0;
}

.v-timeline-item ul li {
  margin-bottom: 5px;
}
</style>
