// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
const allSearchData = [{
        id: "nav-home-tr",
        lang: "tr",
        title: "hakkımda",
        section: "Navigation",
        handler: () => {
          window.location.href = "/tr/";
        },
      },{
        id: "nav-home-de",
        lang: "de",
        title: "über mich",
        section: "Navigation",
        handler: () => {
          window.location.href = "/de/";
        },
      },{
        id: "nav-home-en",
        lang: "en",
        title: "about",
        section: "Navigation",
        handler: () => {
          window.location.href = "/";
        },
      },{id: "nav-projeler",
          lang: "tr",
          title: "projeler",
          description: "Yazılım mühendisliği, makine öğrenmesi ve bilimsel hesaplama alanlarından seçili projeler.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tr/projects/";
          },
        },{id: "nav-projekte",
          lang: "de",
          title: "Projekte",
          description: "Ausgewählte Projekte aus Software Engineering, Machine Learning und Scientific Computing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/projects/";
          },
        },{id: "nav-projects",
          lang: "en",
          title: "projects",
          description: "Selected software engineering, machine learning, and scientific computing projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-akademik-çalışmalar",
          lang: "tr",
          title: "akademik çalışmalar",
          description: "Makine öğrenmesi ve yazılım sistemleri alanlarındaki seçili araştırma ve akademik çalışmalar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tr/academic-work/";
          },
        },{id: "nav-akademische-arbeiten",
          lang: "de",
          title: "akademische Arbeiten",
          description: "Ausgewählte Forschungs- und Studienarbeiten zu Machine Learning und Softwaresystemen.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/academic-work/";
          },
        },{id: "nav-academic-work",
          lang: "en",
          title: "academic work",
          description: "Selected research and academic work in machine learning and software systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic-work/";
          },
        },{id: "nav-haberler",
          lang: "tr",
          title: "haberler",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tr/news/";
          },
        },{id: "nav-neuigkeiten",
          lang: "de",
          title: "Neuigkeiten",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/news/";
          },
        },{id: "nav-news",
          lang: "en",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-özgeçmiş",
          lang: "tr",
          title: "özgeçmiş",
          description: "İngilizce veya Almanca özgeçmişimi indirin.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tr/cv/";
          },
        },{id: "nav-lebenslauf",
          lang: "de",
          title: "Lebenslauf",
          description: "Meinen Lebenslauf auf Englisch oder Deutsch herunterladen.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/cv/";
          },
        },{id: "nav-cv",
          lang: "en",
          title: "cv",
          description: "Download my curriculum vitae in English or German.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        lang: "en",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        lang: "en",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        lang: "en",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        lang: "en",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        lang: "en",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        lang: "en",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        lang: "en",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        lang: "en",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        lang: "en",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        lang: "en",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        lang: "en",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        lang: "en",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        lang: "en",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        lang: "en",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        lang: "en",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        lang: "en",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        lang: "en",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        lang: "en",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        lang: "en",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        lang: "en",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        lang: "en",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        lang: "en",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        lang: "en",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        lang: "en",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        lang: "en",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        lang: "en",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        lang: "en",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        lang: "en",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        lang: "en",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        lang: "en",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        lang: "en",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        lang: "en",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        lang: "en",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          lang: "en",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-began-the-b-sc-computer-engineering-program-at-middle-east-technical-university-northern-cyprus-campus-starting-an-undergraduate-path-that-combined-software-engineering-computer-systems-data-and-applied-project-work",
          lang: "en",
          title: 'Began the B.Sc. Computer Engineering program at Middle East Technical University Northern Cyprus...',
          description: "",
          section: "News",},{id: "news-begann-den-bachelorstudiengang-computer-engineering-am-middle-east-technical-university-northern-cyprus-campus-und-damit-ein-studium-das-software-engineering-computersysteme-datenverarbeitung-und-anwendungsorientierte-projektarbeit-verband",
          lang: "de",
          title: 'Begann den Bachelorstudiengang Computer Engineering am Middle East Technical University Northern Cyprus Campus...',
          description: "",
          section: "News",},{id: "news-middle-east-technical-university-northern-cyprus-campus-bilgisayar-mühendisliği-lisans-programına-başlayarak-yazılım-mühendisliği-bilgisayar-sistemleri-veri-ve-uygulamalı-proje-çalışmalarını-bir-araya-getiren-lisans-eğitimime-adım-attım",
          lang: "tr",
          title: 'Middle East Technical University Northern Cyprus Campus Bilgisayar Mühendisliği lisans programına başlayarak yazılım...',
          description: "",
          section: "News",},{id: "news-joined-zorluteks-tekstil-ticaret-ve-sanayi-a-ş-as-an-information-technology-intern-i-developed-a-c-net-desktop-application-for-material-and-database-operations-and-migrated-spreadsheet-data-into-company-databases",
          lang: "en",
          title: 'Joined Zorluteks Tekstil Ticaret ve Sanayi A.Ş. as an Information Technology Intern. I...',
          description: "",
          section: "News",},{id: "news-begann-bei-zorluteks-tekstil-ticaret-ve-sanayi-a-ş-als-praktikant-im-bereich-informationstechnologie-ich-entwickelte-eine-c-net-desktopanwendung-für-material-und-datenbankoperationen-und-überführte-tabellenkalkulationsdaten-in-unternehmensdatenbanken",
          lang: "de",
          title: 'Begann bei Zorluteks Tekstil Ticaret ve Sanayi A.Ş. als Praktikant im Bereich Informationstechnologie....',
          description: "",
          section: "News",},{id: "news-zorluteks-tekstil-ticaret-ve-sanayi-a-ş-bünyesinde-bilgi-teknolojileri-stajyeri-olarak-çalışmaya-başladım-malzeme-ve-veri-tabanı-işlemleri-için-bir-c-net-masaüstü-uygulaması-geliştirdim-ve-elektronik-tablo-verilerini-şirket-veri-tabanlarına-aktardım",
          lang: "tr",
          title: 'Zorluteks Tekstil Ticaret ve Sanayi A.Ş. bünyesinde Bilgi Teknolojileri Stajyeri olarak çalışmaya başladım....',
          description: "",
          section: "News",},{id: "news-joined-yapı-kredi-teknoloji-a-ş-as-a-software-engineer-intern-i-built-a-full-stack-sprint-newsletter-application-with-java-spring-boot-react-and-angular-including-integration-with-the-atlassian-jira-api",
          lang: "en",
          title: 'Joined Yapı Kredi Teknoloji A.Ş. as a Software Engineer Intern. I built a...',
          description: "",
          section: "News",},{id: "news-begann-bei-yapı-kredi-teknoloji-a-ş-als-praktikant-im-software-engineering-ich-entwickelte-eine-full-stack-anwendung-für-sprint-newsletter-mit-java-spring-boot-react-und-angular-einschließlich-einer-integration-der-atlassian-jira-api",
          lang: "de",
          title: 'Begann bei Yapı Kredi Teknoloji A.Ş. als Praktikant im Software Engineering. Ich entwickelte...',
          description: "",
          section: "News",},{id: "news-yapı-kredi-teknoloji-a-ş-bünyesinde-yazılım-mühendisliği-stajyeri-olarak-çalışmaya-başladım-java-spring-boot-react-ve-angular-kullanarak-atlassian-jira-api-entegrasyonuna-sahip-tam-kapsamlı-bir-sprint-bülteni-uygulaması-geliştirdim",
          lang: "tr",
          title: 'Yapı Kredi Teknoloji A.Ş. bünyesinde Yazılım Mühendisliği Stajyeri olarak çalışmaya başladım. Java/Spring Boot,...',
          description: "",
          section: "News",},{id: "news-joined-the-technical-university-of-munich-tum-as-an-m-sc-informatics-student-and-began-graduate-studies-focused-on-software-engineering-machine-learning-and-scientific-computing",
          lang: "en",
          title: 'Joined the Technical University of Munich (TUM) as an M.Sc. Informatics student and...',
          description: "",
          section: "News",},{id: "news-begann-den-masterstudiengang-informatik-an-der-technischen-universität-münchen-tum-mit-schwerpunkten-in-software-engineering-machine-learning-und-scientific-computing",
          lang: "de",
          title: 'Begann den Masterstudiengang Informatik an der Technischen Universität München (TUM) mit Schwerpunkten in...',
          description: "",
          section: "News",},{id: "news-technical-university-of-munich-tum-informatics-yüksek-lisans-programına-başlayarak-yazılım-mühendisliği-makine-öğrenmesi-ve-bilimsel-hesaplama-odaklı-lisansüstü-eğitimime-devam-ettim",
          lang: "tr",
          title: 'Technical University of Munich (TUM) Informatics yüksek lisans programına başlayarak yazılım mühendisliği, makine...',
          description: "",
          section: "News",},{id: "news-joined-a-joint-research-project-at-helmholtz-zentrum-münchen-deutsches-forschungszentrum-für-gesundheit-und-umwelt-gmbh-and-technical-university-of-munich-tum-as-a-graduate-student-research-assistant-i-supported-python-pytorch-workflows-for-drug-response-prediction-and-graph-based-molecular-representations",
          lang: "en",
          title: 'Joined a joint research project at Helmholtz Zentrum München - Deutsches Forschungszentrum für...',
          description: "",
          section: "News",},{id: "news-begann-als-wissenschaftliche-hilfskraft-in-einem-gemeinsamen-forschungsprojekt-des-helmholtz-zentrums-münchen-deutsches-forschungszentrum-für-gesundheit-und-umwelt-gmbh-und-der-technischen-universität-münchen-tum-ich-unterstützte-python-pytorch-workflows-für-die-vorhersage-von-arzneimittelreaktionen-und-graphbasierte-molekulare-repräsentationen",
          lang: "de",
          title: 'Begann als wissenschaftliche Hilfskraft in einem gemeinsamen Forschungsprojekt des Helmholtz Zentrums München -...',
          description: "",
          section: "News",},{id: "news-helmholtz-zentrum-münchen-deutsches-forschungszentrum-für-gesundheit-und-umwelt-gmbh-ile-technical-university-of-munich-tum-ortak-araştırma-projesine-yüksek-lisans-araştırma-asistanı-olarak-katıldım-i̇laç-yanıtı-tahmini-ve-grafik-tabanlı-moleküler-gösterimler-için-python-pytorch-iş-akışlarını-destekledim",
          lang: "tr",
          title: 'Helmholtz Zentrum München - Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH) ile Technical...',
          description: "",
          section: "News",},{id: "news-joined-itestra-gmbh-as-a-software-engineer-on-a-technology-consulting-project-i-developed-java-static-analysis-and-call-graph-tooling-for-detecting-performance-anti-patterns-in-enterprise-applications",
          lang: "en",
          title: 'Joined itestra GmbH as a Software Engineer on a technology consulting project. I...',
          description: "",
          section: "News",},{id: "news-begann-bei-der-itestra-gmbh-als-software-engineer-in-einem-technologieberatungsprojekt-ich-entwickelte-werkzeuge-für-statische-java-analyse-und-call-graph-analysen-zur-erkennung-von-performance-anti-patterns-in-unternehmensanwendungen",
          lang: "de",
          title: 'Begann bei der itestra GmbH als Software Engineer in einem Technologieberatungsprojekt. Ich entwickelte...',
          description: "",
          section: "News",},{id: "news-itestra-gmbh-bünyesinde-bir-teknoloji-danışmanlığı-projesinde-yazılım-mühendisi-olarak-çalışmaya-başladım-kurumsal-uygulamalardaki-performans-anti-pattern-lerini-tespit-etmek-için-java-statik-analiz-ve-çağrı-grafiği-araçları-geliştirdim",
          lang: "tr",
          title: 'itestra GmbH bünyesinde bir teknoloji danışmanlığı projesinde Yazılım Mühendisi olarak çalışmaya başladım. Kurumsal...',
          description: "",
          section: "News",},{id: "news-joined-legalian-gmbh-as-a-software-engineer-i-took-ownership-of-a-fastapi-microservice-for-retrieving-normalizing-storing-and-searching-current-and-historical-data-from-the-danish-business-register",
          lang: "en",
          title: 'Joined Legalian GmbH as a Software Engineer. I took ownership of a FastAPI...',
          description: "",
          section: "News",},{id: "news-begann-bei-der-legalian-gmbh-als-software-engineer-ich-übernahm-die-verantwortung-für-einen-fastapi-microservice-zum-abrufen-normalisieren-speichern-und-durchsuchen-aktueller-und-historischer-daten-aus-dem-dänischen-unternehmensregister",
          lang: "de",
          title: 'Begann bei der Legalian GmbH als Software Engineer. Ich übernahm die Verantwortung für...',
          description: "",
          section: "News",},{id: "news-legalian-gmbh-bünyesinde-yazılım-mühendisi-olarak-çalışmaya-başladım-danimarka-ticaret-sicili-ndeki-güncel-ve-tarihsel-verileri-alma-normalleştirme-saklama-ve-aramaya-yönelik-bir-fastapi-mikroservisinin-sorumluluğunu-üstlendim",
          lang: "tr",
          title: 'Legalian GmbH bünyesinde Yazılım Mühendisi olarak çalışmaya başladım. Danimarka Ticaret Sicili’ndeki güncel ve...',
          description: "",
          section: "News",},{id: "news-joined-accu-rate-gmbh-as-a-machine-learning-research-engineer-for-a-company-collaborative-master-s-thesis-project-i-built-an-end-to-end-pipeline-connecting-crowd-it-simulations-with-neural-surrogate-models-and-sampling-strategies",
          lang: "en",
          title: 'Joined accu:rate GmbH as a Machine Learning Research Engineer for a company-collaborative master’s...',
          description: "",
          section: "News",},{id: "news-begann-bei-der-accu-rate-gmbh-als-machine-learning-research-engineer-im-rahmen-einer-masterarbeit-in-zusammenarbeit-mit-dem-unternehmen-ich-entwickelte-eine-durchgängige-pipeline-die-crowd-it-simulationen-mit-neuronalen-surrogatmodellen-und-sampling-strategien-verbindet",
          lang: "de",
          title: 'Begann bei der accu:rate GmbH als Machine Learning Research Engineer im Rahmen einer...',
          description: "",
          section: "News",},{id: "news-şirket-iş-birliğiyle-yürütülen-yüksek-lisans-tezi-kapsamında-accu-rate-gmbh-bünyesinde-makine-öğrenmesi-araştırma-mühendisi-olarak-çalışmaya-başladım-crowd-it-simülasyonlarını-sinir-ağı-tabanlı-surrogate-modeller-ve-örnekleme-stratejileriyle-birleştiren-uçtan-uca-bir-pipeline-geliştirdim",
          lang: "tr",
          title: 'Şirket iş birliğiyle yürütülen yüksek lisans tezi kapsamında accu:rate GmbH bünyesinde Makine Öğrenmesi...',
          description: "",
          section: "News",},{id: "news-presented-predicting-macroscopic-crowd-properties-using-the-swim-algorithm-at-the-accu-rate-gmbh-office-after-completing-the-thesis-in-collaboration-with-the-technical-university-of-munich-tum-prof-dr-felix-dietrich-supervised-the-thesis-ana-cukarska-advised-it-and-i-worked-with-dr-angelika-kneidl-and-johannes-hölscher-at-accu-rate",
          lang: "en",
          title: 'Presented “Predicting Macroscopic Crowd Properties Using the SWIM Algorithm” at the accu:rate GmbH...',
          description: "",
          section: "News",},{id: "news-präsentierte-predicting-macroscopic-crowd-properties-using-the-swim-algorithm-im-büro-der-accu-rate-gmbh-nachdem-ich-die-arbeit-in-zusammenarbeit-mit-der-technischen-universität-münchen-tum-abgeschlossen-hatte-prof-dr-felix-dietrich-betreute-die-arbeit-ana-cukarska-begleitete-sie-fachlich-und-bei-accu-rate-arbeitete-ich-mit-dr-angelika-kneidl-und-johannes-hölscher-zusammen",
          lang: "de",
          title: 'Präsentierte „Predicting Macroscopic Crowd Properties Using the SWIM Algorithm“ im Büro der accu:rate...',
          description: "",
          section: "News",},{id: "news-predicting-macroscopic-crowd-properties-using-the-swim-algorithm-başlıklı-tezimi-technical-university-of-munich-tum-iş-birliğiyle-tamamladıktan-sonra-accu-rate-gmbh-ofisinde-sundum-tezin-danışmanlığını-prof-dr-felix-dietrich-akademik-rehberliğini-ana-cukarska-üstlendi-accu-rate-tarafında-dr-angelika-kneidl-ve-johannes-hölscher-ile-çalıştım",
          lang: "tr",
          title: '“Predicting Macroscopic Crowd Properties Using the SWIM Algorithm” başlıklı tezimi Technical University of...',
          description: "",
          section: "News",},{id: "news-completed-the-m-sc-informatics-program-at-the-technical-university-of-munich-tum",
          lang: "en",
          title: 'Completed the M.Sc. Informatics program at the Technical University of Munich (TUM).',
          description: "",
          section: "News",},{id: "news-schloss-den-masterstudiengang-informatik-an-der-technischen-universität-münchen-tum-ab",
          lang: "de",
          title: 'Schloss den Masterstudiengang Informatik an der Technischen Universität München (TUM) ab.',
          description: "",
          section: "News",},{id: "news-technical-university-of-munich-tum-informatics-yüksek-lisans-programını-tamamladım",
          lang: "tr",
          title: 'Technical University of Munich (TUM) Informatics yüksek lisans programını tamamladım.',
          description: "",
          section: "News",},{id: "news-completed-the-c-mpi-high-performance-simulation-project-and-published-the-final-implementation-on-github",
          lang: "en",
          title: 'Completed the C++/MPI high-performance simulation project and published the final implementation on GitHub....',
          description: "",
          section: "News",},{id: "news-schloss-das-c-mpi-projekt-für-hochleistungssimulationen-ab-und-veröffentlichte-die-finale-implementierung-auf-github",
          lang: "de",
          title: 'Schloss das C++/MPI-Projekt für Hochleistungssimulationen ab und veröffentlichte die finale Implementierung auf GitHub....',
          description: "",
          section: "News",},{id: "news-c-mpi-yüksek-başarımlı-simülasyon-projesini-tamamlayarak-son-uygulamayı-github-da-yayımladım",
          lang: "tr",
          title: 'C++/MPI yüksek başarımlı simülasyon projesini tamamlayarak son uygulamayı GitHub’da yayımladım.',
          description: "",
          section: "News",},{id: "news-attended-the-graduation-ceremony-of-the-technical-university-of-munich-tum",
          lang: "en",
          title: 'Attended the graduation ceremony of the Technical University of Munich (TUM).',
          description: "",
          section: "News",},{id: "news-nahm-an-der-abschlussfeier-der-technischen-universität-münchen-tum-teil",
          lang: "de",
          title: 'Nahm an der Abschlussfeier der Technischen Universität München (TUM) teil.',
          description: "",
          section: "News",},{id: "news-technical-university-of-munich-tum-mezuniyet-törenine-katıldım",
          lang: "tr",
          title: 'Technical University of Munich (TUM) mezuniyet törenine katıldım.',
          description: "",
          section: "News",},{id: "projects-career-diaries-multi-role-career-community",
          lang: "en",
          title: 'Career Diaries Multi-Role Career Community',
          description: "A Python/Tkinter and MySQL application connecting students, alumni, academics, workplaces, and career reviews through a multi-role relational model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/career-diaries-community-platform/";
            },},{id: "projects-fruit-tree-recognition-system",
          lang: "en",
          title: 'Fruit Tree Recognition System',
          description: "A classical computer vision pipeline using shape, moment, and color features with k-fold validation for image recognition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fruit-tree-recognition/";
            },},{id: "projects-e-commerce-web-service-and-desktop-client",
          lang: "en",
          title: 'E-commerce Web Service and Desktop Client',
          description: "A Spring Boot and MySQL product platform with a separate desktop client for computer and phone catalogue workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/java-spring-ecommerce-service/";
            },},{id: "projects-mips-assembler-in-python",
          lang: "en",
          title: 'MIPS Assembler in Python',
          description: "A Python assembler that translates core MIPS instructions and selected pseudo-instructions into hexadecimal machine code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python-mips-assembler/";
            },},{id: "projects-multi-client-coffee-shop-system",
          lang: "en",
          title: 'Multi-Client Coffee Shop System',
          description: "A Python TCP client-server application for recording coffee-shop sales and producing operational statistics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python-coffee-shop-client-server/";
            },},{id: "projects-simulation-efficient-evacuation-prediction",
          lang: "en",
          title: 'Simulation-Efficient Evacuation Prediction',
          description: "An end-to-end machine learning pipeline for predicting multi-story evacuation times with far fewer crowd simulations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evacuation-prediction/";
            },},{id: "projects-historical-company-registry-data-platform",
          lang: "en",
          title: 'Historical Company Registry Data Platform',
          description: "A FastAPI backend for retrieving, normalizing, storing, and searching current and historical data from the Danish Business Register.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/company-registry-data-platform/";
            },},{id: "projects-java-performance-anti-pattern-analyzer",
          lang: "en",
          title: 'Java Performance Anti-Pattern Analyzer',
          description: "A static and dynamic analysis tool that traces repository calls through Java call chains and delivers severity-ranked findings inside IntelliJ IDEA.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/java-performance-antipattern-analyzer/";
            },},{id: "projects-reproducible-ml-workflows-for-chemcpa",
          lang: "en",
          title: 'Reproducible ML Workflows for chemCPA',
          description: "Research engineering for a Python/PyTorch system that predicts single-cell responses to unseen drug perturbations, with a focus on issue diagnosis, data workflows, and reproducible experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chemcpa-research-engineering/";
            },},{id: "projects-sprint-reporting-and-productivity-workflow",
          lang: "en",
          title: 'Sprint Reporting and Productivity Workflow',
          description: "A full-stack internal workflow that improved sprint-data quality and turned team inputs into consistent newsletters and monthly productivity reporting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sprint-reporting-productivity-workflow/";
            },},{id: "projects-material-and-database-operations-desktop-app",
          lang: "en",
          title: 'Material and Database Operations Desktop App',
          description: "A C#/.NET desktop application that moved spreadsheet-based material records into a clearer interface with controlled SQL updates and database operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/material-database-operations-app/";
            },},{id: "projects-parallel-hdf5-output-for-cfd-simulations",
          lang: "en",
          title: 'Parallel HDF5 Output for CFD Simulations',
          description: "A C++/MPI extension to NS-EOF that added structured HDF5 output and XDMF metadata for faster, smaller, ParaView-ready simulation data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parallel-hdf5-cfd-output/";
            },},{id: "projects-legal-ai-data-labelling-platform",
          lang: "en",
          title: 'Legal AI Data Labelling Platform',
          description: "A React/TypeScript and Flask platform for document upload, OCR, ML-assisted classification, annotation workflows, and secure access to protected legal-data services.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/legal-ai-data-labelling-platform/";
            },},{id: "projects-github-issue-tracking-research-tool",
          lang: "en",
          title: 'GitHub Issue-Tracking Research Tool',
          description: "A Python desktop application that turns GitHub issue activity into process metrics, visual analyses, and exportable research data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/issue-tracking-team-analytics/";
            },},{id: "projects-career-diaries-karriereplattform-mit-mehreren-rollen",
          lang: "de",
          title: 'Career Diaries, Karriereplattform mit mehreren Rollen',
          description: "Eine Python/Tkinter- und MySQL-Anwendung, die Studierende, Alumni, Forschende, Arbeitsplätze und Karrierebewertungen über ein relationales Mehrrollenmodell verbindet.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/career-diaries-community-platform/";
            },},{id: "projects-erkennungssystem-für-obstbäume",
          lang: "de",
          title: 'Erkennungssystem für Obstbäume',
          description: "Eine klassische Computer-Vision-Pipeline mit Form-, Moment- und Farbmerkmalen sowie K-Fold-Validierung zur Bilderkennung.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/fruit-tree-recognition/";
            },},{id: "projects-e-commerce-webservice-und-desktop-client",
          lang: "de",
          title: 'E-Commerce-Webservice und Desktop-Client',
          description: "Eine Spring-Boot- und MySQL-Produktplattform mit separatem Desktop-Client für Katalogprozesse rund um Computer und Smartphones.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/java-spring-ecommerce-service/";
            },},{id: "projects-mips-assembler-in-python",
          lang: "de",
          title: 'MIPS-Assembler in Python',
          description: "Ein Python-Assembler, der zentrale MIPS-Instruktionen und ausgewählte Pseudoinstruktionen in hexadezimalen Maschinencode übersetzt.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/python-mips-assembler/";
            },},{id: "projects-mehrbenutzer-coffee-shop-system",
          lang: "de",
          title: 'Mehrbenutzer-Coffee-Shop-System',
          description: "Eine Python-TCP-Client-Server-Anwendung zur Erfassung von Verkäufen und Auswertung operativer Kennzahlen.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/python-coffee-shop-client-server/";
            },},{id: "projects-simulationseffiziente-vorhersage-von-evakuierungszeiten",
          lang: "de",
          title: 'Simulationseffiziente Vorhersage von Evakuierungszeiten',
          description: "Eine durchgängige Machine-Learning-Pipeline zur Vorhersage von Evakuierungszeiten in mehrstöckigen Gebäuden mit deutlich weniger Personensimulationen.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/evacuation-prediction/";
            },},{id: "projects-plattform-für-historische-unternehmensregisterdaten",
          lang: "de",
          title: 'Plattform für historische Unternehmensregisterdaten',
          description: "Ein FastAPI-Backend zum Abrufen, Normalisieren, Speichern und Durchsuchen aktueller und historischer Daten aus dem dänischen Unternehmensregister.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/company-registry-data-platform/";
            },},{id: "projects-java-performance-anti-pattern-analyzer",
          lang: "de",
          title: 'Java Performance Anti-Pattern Analyzer',
          description: "Ein Werkzeug für statische und dynamische Analyse, das Repository-Aufrufe durch Java-Aufrufketten verfolgt und nach Schweregrad geordnete Befunde in IntelliJ IDEA bereitstellt.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/java-performance-antipattern-analyzer/";
            },},{id: "projects-reproduzierbare-ml-workflows-für-chemcpa",
          lang: "de",
          title: 'Reproduzierbare ML-Workflows für chemCPA',
          description: "Research Engineering für ein Python/PyTorch-System zur Vorhersage zellulärer Reaktionen auf unbekannte Wirkstoffperturbationen mit Schwerpunkt auf Fehlerdiagnose, Datenworkflows und reproduzierbaren Experimenten.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/chemcpa-research-engineering/";
            },},{id: "projects-workflow-für-sprint-reporting-und-produktivität",
          lang: "de",
          title: 'Workflow für Sprint-Reporting und Produktivität',
          description: "Ein internes Full-Stack-System, das die Qualität von Sprint-Daten verbesserte und Teamangaben in einheitliche Newsletter und monatliche Produktivitätsberichte überführte.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/sprint-reporting-productivity-workflow/";
            },},{id: "projects-desktop-app-für-material-und-datenbankprozesse",
          lang: "de",
          title: 'Desktop-App für Material- und Datenbankprozesse',
          description: "Eine C#/.NET-Desktop-Anwendung, die tabellenbasierte Materialdaten in eine übersichtlichere Oberfläche mit kontrollierten SQL-Aktualisierungen und Datenbankoperationen überführte.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/material-database-operations-app/";
            },},{id: "projects-parallele-hdf5-ausgabe-für-cfd-simulationen",
          lang: "de",
          title: 'Parallele HDF5-Ausgabe für CFD-Simulationen',
          description: "Eine C++/MPI-Erweiterung für NS-EOF mit strukturierter HDF5-Ausgabe und XDMF-Metadaten für schnellere, kleinere und direkt in ParaView nutzbare Simulationsdaten.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/parallel-hdf5-cfd-output/";
            },},{id: "projects-legal-ai-plattform-zur-datenannotation",
          lang: "de",
          title: 'Legal-AI-Plattform zur Datenannotation',
          description: "Eine React/TypeScript- und Flask-Plattform für Dokument-Upload, OCR, ML-gestützte Klassifikation, Annotationsworkflows und sicheren Zugriff auf geschützte Legal-Data-Dienste.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/legal-ai-data-labelling-platform/";
            },},{id: "projects-forschungswerkzeug-für-github-issue-tracking",
          lang: "de",
          title: 'Forschungswerkzeug für GitHub Issue Tracking',
          description: "Eine Python-Desktop-Anwendung, die GitHub-Issue-Aktivitäten in Prozessmetriken, visuelle Analysen und exportierbare Forschungsdaten überführt.",
          section: "Projects",handler: () => {
              window.location.href = "/de/projects/issue-tracking-team-analytics/";
            },},{id: "projects-career-diaries-çok-rollü-kariyer-topluluğu",
          lang: "tr",
          title: 'Career Diaries Çok Rollü Kariyer Topluluğu',
          description: "Öğrencileri, mezunları, akademisyenleri, iş yerlerini ve kariyer değerlendirmelerini çok rollü ilişkisel bir modelle bağlayan Python/Tkinter ve MySQL uygulaması.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/career-diaries-community-platform/";
            },},{id: "projects-meyve-ağacı-tanıma-sistemi",
          lang: "tr",
          title: 'Meyve Ağacı Tanıma Sistemi',
          description: "Görsel tanıma için şekil, moment ve renk özelliklerini K-Fold doğrulamayla kullanan klasik computer vision hattı.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/fruit-tree-recognition/";
            },},{id: "projects-e-ticaret-web-servisi-ve-masaüstü-i̇stemcisi",
          lang: "tr",
          title: 'E-Ticaret Web Servisi ve Masaüstü İstemcisi',
          description: "Bilgisayar ve telefon kataloğu iş akışları için ayrı bir masaüstü istemcisine sahip Spring Boot ve MySQL ürün platformu.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/java-spring-ecommerce-service/";
            },},{id: "projects-python-ile-mips-assembler",
          lang: "tr",
          title: 'Python ile MIPS Assembler',
          description: "Temel MIPS komutlarını ve seçili pseudo-instructionları onaltılık makine koduna çeviren Python assembler.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/python-mips-assembler/";
            },},{id: "projects-çok-i̇stemcili-kahve-dükkanı-sistemi",
          lang: "tr",
          title: 'Çok İstemcili Kahve Dükkanı Sistemi',
          description: "Kahve dükkanı satışlarını kaydetmek ve operasyonel istatistikler üretmek için Python TCP client-server uygulaması.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/python-coffee-shop-client-server/";
            },},{id: "projects-simülasyon-verimli-tahliye-süresi-tahmini",
          lang: "tr",
          title: 'Simülasyon Verimli Tahliye Süresi Tahmini',
          description: "Çok katlı bina tahliye sürelerini çok daha az yaya simülasyonuyla tahmin eden uçtan uca makine öğrenmesi hattı.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/evacuation-prediction/";
            },},{id: "projects-tarihsel-şirket-sicili-veri-platformu",
          lang: "tr",
          title: 'Tarihsel Şirket Sicili Veri Platformu',
          description: "Danimarka Ticaret Sicili&#39;ndeki güncel ve tarihsel verileri alma, normalleştirme, saklama ve aramaya yönelik bir FastAPI backend&#39;i.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/company-registry-data-platform/";
            },},{id: "projects-java-performans-anti-pattern-analiz-aracı",
          lang: "tr",
          title: 'Java Performans Anti-Pattern Analiz Aracı',
          description: "Repository çağrılarını Java çağrı zincirleri boyunca izleyen ve önem derecesine göre sıralanmış bulguları IntelliJ IDEA içinde sunan statik ve dinamik analiz aracı.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/java-performance-antipattern-analyzer/";
            },},{id: "projects-chemcpa-için-yeniden-üretilebilir-ml-i̇ş-akışları",
          lang: "tr",
          title: 'chemCPA için Yeniden Üretilebilir ML İş Akışları',
          description: "Görülmemiş ilaç perturbation&#39;larına karşı tek hücre yanıtlarını tahmin eden Python/PyTorch sistemi için issue tanılama, veri iş akışları ve yeniden üretilebilir deneylere odaklanan araştırma mühendisliği.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/chemcpa-research-engineering/";
            },},{id: "projects-sprint-raporlama-ve-verimlilik-i̇ş-akışı",
          lang: "tr",
          title: 'Sprint Raporlama ve Verimlilik İş Akışı',
          description: "Sprint verilerinin kalitesini iyileştiren ve ekip girdilerini tutarlı bültenler ile aylık verimlilik raporlarına dönüştüren şirket içi bir full-stack sistem.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/sprint-reporting-productivity-workflow/";
            },},{id: "projects-malzeme-ve-veritabanı-i̇şlemleri-masaüstü-uygulaması",
          lang: "tr",
          title: 'Malzeme ve Veritabanı İşlemleri Masaüstü Uygulaması',
          description: "Excel tabanlı malzeme kayıtlarını kontrollü SQL güncellemeleri ve veritabanı işlemleri sunan daha anlaşılır bir arayüze taşıyan C#/.NET masaüstü uygulaması.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/material-database-operations-app/";
            },},{id: "projects-cfd-simülasyonları-için-paralel-hdf5-çıktısı",
          lang: "tr",
          title: 'CFD Simülasyonları için Paralel HDF5 Çıktısı',
          description: "Daha hızlı, daha küçük ve ParaView&#39;a hazır simülasyon verileri için NS-EOF&#39;a yapılandırılmış HDF5 çıktısı ve XDMF metadatası ekleyen C++/MPI uzantısı.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/parallel-hdf5-cfd-output/";
            },},{id: "projects-legal-ai-veri-etiketleme-platformu",
          lang: "tr",
          title: 'Legal AI Veri Etiketleme Platformu',
          description: "Belge yükleme, OCR, ML destekli sınıflandırma, etiketleme iş akışları ve korumalı hukuki veri servislerine güvenli erişim sunan React/TypeScript ve Flask platformu.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/legal-ai-data-labelling-platform/";
            },},{id: "projects-github-issue-takibi-araştırma-aracı",
          lang: "tr",
          title: 'GitHub Issue Takibi Araştırma Aracı',
          description: "GitHub issue etkinliğini süreç metriklerine, görsel analizlere ve dışa aktarılabilir araştırma verilerine dönüştüren Python masaüstü uygulaması.",
          section: "Projects",handler: () => {
              window.location.href = "/tr/projects/issue-tracking-team-analytics/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%67%61%74%61%79%36%30%30@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Cagataygultekin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cagataygultekinn", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

const pageLanguage = document.documentElement.lang || "en";
const searchUi = {
  en: {
    sections: { Navigation: "Navigation", Dropdown: "Navigation", Posts: "Posts", Projects: "Projects", News: "News", Socials: "Social links", Theme: "Theme" },
    commands: {
      "light-theme": ["Change theme to light", "Use the light color theme"],
      "dark-theme": ["Change theme to dark", "Use the dark color theme"],
      "system-theme": ["Use system default theme", "Follow the system color theme"],
    },
  },
  de: {
    sections: { Navigation: "Navigation", Dropdown: "Navigation", Posts: "Beiträge", Projects: "Projekte", News: "Neuigkeiten", Socials: "Soziale Links", Theme: "Farbschema" },
    commands: {
      "light-theme": ["Helles Farbschema verwenden", "Zum hellen Farbschema wechseln"],
      "dark-theme": ["Dunkles Farbschema verwenden", "Zum dunklen Farbschema wechseln"],
      "system-theme": ["Systemeinstellung verwenden", "Dem Farbschema des Systems folgen"],
    },
  },
  tr: {
    sections: { Navigation: "Gezinme", Dropdown: "Gezinme", Posts: "Yazılar", Projects: "Projeler", News: "Haberler", Socials: "Sosyal bağlantılar", Theme: "Tema" },
    commands: {
      "light-theme": ["Açık temayı kullan", "Açık renk temasına geç"],
      "dark-theme": ["Koyu temayı kullan", "Koyu renk temasına geç"],
      "system-theme": ["Sistem temasını kullan", "Sistemin renk temasını izle"],
    },
  },
};
const activeSearchUi = searchUi[pageLanguage] || searchUi.en;
ninja.data = allSearchData
  .filter((item) => !item.lang || item.lang === pageLanguage)
  .map((item) => {
    const localizedItem = { ...item, section: activeSearchUi.sections[item.section] || item.section };
    const command = activeSearchUi.commands[item.id];
    if (command) {
      localizedItem.title = command[0];
      localizedItem.description = command[1];
    }
    return localizedItem;
  });
