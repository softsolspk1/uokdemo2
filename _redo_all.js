const fs = require('fs');

const oldMobile = `<div class="th-mobile-menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li class="menu-item-has-children">
          <a href="about.html">About Us</a>
          <ul class="sub-menu">
            <li><a href="about.html">About &amp; History</a></li>
            <li><a href="administration.html">Administration</a></li>
          </ul>
        </li>
        <li><a href="academics.html">Academics</a></li>
        <li><a href="admissions.html">Admissions</a></li>
        <li class="menu-item-has-children">
          <a href="research.html">Research</a>
          <ul class="sub-menu">
            <li><a href="research.html">Research Institutes</a></li>
            <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
            <li><a href="department-computerscience.html">Dept. of Computer Science (UBIT)</a></li>
          </ul>
        </li>
        <li><a href="library.html">Library</a></li>
        <li><a href="student-life.html">Student Life</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>`;

const newMobile = `<div class="th-mobile-menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li class="menu-item-has-children">
          <a href="about.html">About Us</a>
          <ul class="sub-menu">
            <li><a href="about.html">About &amp; History</a></li>
            <li><a href="administration.html">Administration</a></li>
            <li><a href="registrar.html">Registrar's Office</a></li>
            <li><a href="alumni.html">Alumni</a></li>
            <li><a href="policies.html">Policies</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a href="academics.html">Academics</a>
          <ul class="sub-menu">
            <li><a href="academics.html">Faculties &amp; Departments</a></li>
            <li><a href="department-computerscience.html">Dept. of Computer Science (UBIT)</a></li>
            <li><a href="examination.html">Examinations</a></li>
            <li><a href="downloads.html">Downloads</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a href="admissions.html">Admissions</a>
          <ul class="sub-menu">
            <li><a href="admissions.html">Admissions 2026</a></li>
            <li><a href="pg-admissions.html">Postgraduate Admissions</a></li>
            <li><a href="foreign-students.html">Foreign Students' Policy</a></li>
            <li><a href="semester-fee.html">Semester Fee</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a href="research.html">Research</a>
          <ul class="sub-menu">
            <li><a href="research.html">Research Institutes</a></li>
            <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
            <li><a href="journals.html">Academic Journals</a></li>
          </ul>
        </li>
        <li><a href="library.html">Library</a></li>
        <li class="menu-item-has-children">
          <a href="student-life.html">Student Life</a>
          <ul class="sub-menu">
            <li><a href="student-life.html">Student Life</a></li>
            <li><a href="convocation.html">Convocation</a></li>
          </ul>
        </li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>`;

const oldDesktop = `<nav class="main-menu d-none d-xl-block">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="menu-item-has-children">
                      <a href="about.html">About Us</a>
                      <ul class="sub-menu">
                        <li><a href="about.html">History &amp; Overview</a></li>
                        <li><a href="administration.html">Administration</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="academics.html">Academics</a>
                      <ul class="sub-menu">
                        <li><a href="academics.html">Faculties &amp; Departments</a></li>
                        <li><a href="department-computerscience.html">Dept. of Computer Science (UBIT)</a></li>
                      </ul>
                    </li>
                    <li><a href="admissions.html">Admissions</a></li>
                    <li class="menu-item-has-children">
                      <a href="research.html">Research</a>
                      <ul class="sub-menu">
                        <li><a href="research.html">Research Institutes</a></li>
                        <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
                      </ul>
                    </li>
                    <li><a href="library.html">Library</a></li>
                    <li><a href="student-life.html">Student Life</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>`;

const newDesktop = `<nav class="main-menu d-none d-xl-block">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="menu-item-has-children">
                      <a href="about.html">About Us</a>
                      <ul class="sub-menu">
                        <li><a href="about.html">History &amp; Overview</a></li>
                        <li><a href="administration.html">Administration</a></li>
                        <li><a href="registrar.html">Registrar's Office</a></li>
                        <li><a href="alumni.html">Alumni</a></li>
                        <li><a href="policies.html">Policies</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="academics.html">Academics</a>
                      <ul class="sub-menu">
                        <li><a href="academics.html">Faculties &amp; Departments</a></li>
                        <li><a href="department-computerscience.html">Dept. of Computer Science (UBIT)</a></li>
                        <li><a href="examination.html">Examinations</a></li>
                        <li><a href="downloads.html">Downloads</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="admissions.html">Admissions</a>
                      <ul class="sub-menu">
                        <li><a href="admissions.html">Admissions 2026</a></li>
                        <li><a href="pg-admissions.html">Postgraduate Admissions</a></li>
                        <li><a href="foreign-students.html">Foreign Students' Policy</a></li>
                        <li><a href="semester-fee.html">Semester Fee</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="research.html">Research</a>
                      <ul class="sub-menu">
                        <li><a href="research.html">Research Institutes</a></li>
                        <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
                        <li><a href="journals.html">Academic Journals</a></li>
                      </ul>
                    </li>
                    <li><a href="library.html">Library</a></li>
                    <li class="menu-item-has-children">
                      <a href="student-life.html">Student Life</a>
                      <ul class="sub-menu">
                        <li><a href="student-life.html">Student Life</a></li>
                        <li><a href="convocation.html">Convocation</a></li>
                      </ul>
                    </li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>`;

const oldLinks = `<div class="col-sm-6 col-xl-auto">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Useful Links</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="administration.html">Administration</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>`;

const newLinks = `<div class="col-sm-6 col-xl-auto">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Useful Links</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="administration.html">Administration</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="alumni.html">Alumni</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-auto">
          <div class="widget widget_nav_menu footer-widget">
            <h3 class="widget_title">Resources</h3>
            <div class="menu-all-pages-container">
              <ul class="menu">
                <li><a href="downloads.html">Downloads</a></li>
                <li><a href="examination.html">Examinations</a></li>
                <li><a href="pg-admissions.html">Postgraduate Admissions</a></li>
                <li><a href="foreign-students.html">Foreign Students' Policy</a></li>
                <li><a href="semester-fee.html">Semester Fee</a></li>
                <li><a href="journals.html">Academic Journals</a></li>
                <li><a href="policies.html">Policies</a></li>
                <li><a href="registrar.html">Registrar's Office</a></li>
                <li><a href="convocation.html">Convocation</a></li>
              </ul>
            </div>
          </div>
        </div>`;

const deptMap = {
  'Agriculture &amp; Agribusiness Management': 'agriculture',
  'Applied Chemistry &amp; Chemical Technology': 'appliedchemistry',
  'Applied Physics': 'appliedphysics',
  'Biochemistry': 'biochemistry',
  'Biotechnology': 'biotechnology',
  'Botany': 'botany',
  'Chemistry': 'chemistry',
  'Food Science &amp; Technology': 'foodscience',
  'Genetics': 'genetics',
  'Geography': 'geography',
  'Geology': 'geology',
  'Health, Physical Education &amp; Sports Sciences': 'healthphysical',
  'Mathematics': 'mathematics',
  'Microbiology': 'microbiology',
  'Petroleum Technology': 'petroleumtechnology',
  'Physics': 'physics',
  'Physiology': 'physiology',
  'Statistics': 'statistics',
  'Zoology': 'zoology',
  'Arabic': 'arabic',
  'Bengali': 'bengali',
  'Criminology': 'criminology',
  'Economics': 'economics',
  'English': 'english',
  'History': 'generalhistory',
  'International Relations': 'internationalrelations',
  'Islamic History': 'islamichistory',
  'Library &amp; Information Science': 'libraryinformationsciences',
  'Mass Communication': 'masscommunication',
  'Persian': 'persian',
  'Philosophy': 'philosophy',
  'Political Science': 'politicalscience',
  'Psychology': 'psychology',
  'Sindhi': 'sindhi',
  'Shah Latif Chair': 'shahlatifchair',
  'Social Work': 'socialwork',
  'Sociology': 'sociology',
  'Urdu': 'urdu',
  'Visual Studies': 'visualstudies',
  'Karachi University Business School': 'businessadministration',
  'Commerce': 'commerce',
  'Public Administration': 'publicadministration',
  'Pharmaceutical Chemistry': 'pharmaceuticalchemistry',
  'Pharmaceutics': 'pharmaceutics',
  'Pharmacology': 'pharmacology',
  'Pharmacognosy': 'pharmacognosy',
  'Pharmacy Practice': 'pharmacypractice',
  'Education': 'education',
  'Special Education': 'specialeducation',
  'Teacher Education': 'teachereducation',
  'Chemical Engineering (Accredited with PEC)': 'chemicalengineering',
  'Islamic Learning': 'islamiclearning',
  "Qur'an wa Sunnah": 'quranwasunnah',
  'Usool-ud-Din': 'usooluddin',
  'School of Law': 'law',
};

const instMap = {
  'Institute of Environmental Studies': 'institute-ies.html',
  'Institute of Marine Science': 'institute-ims.html',
  'Institute of Space Science &amp; Technology': 'institute-isst.html',
  'National Nematological Research Centre': 'institute-nnrc.html',
  'Center for Digital Forensic Science &amp; Technology': 'institute-cdfst.html',
  'Area Study Center for Europe': 'institute-asce.html',
  'Centre for Molecular Genetics': 'institute-cmg.html',
  "Centre of Excellence for Women's Studies": 'institute-cews.html',
  'Center for Health &amp; Wellbeing': 'institute-chwb.html',
  'Pakistan Study Center': 'institute-psc.html',
  'Confucius Institute': 'institute-confucius.html',
  'Sardar Yasin Malik Professional Development Centre': 'institute-sympdc.html',
};

const files = ['_chrome-header.html','_chrome-footer.html','index.html','about.html','academics.html','administration.html','admissions.html','contact.html','department-computerscience.html','institute-kibge.html','library.html','research.html','student-life.html','login.html'];

let report = [];
for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');
  let notes = [];

  if (html.includes(oldMobile)) { html = html.split(oldMobile).join(newMobile); notes.push('mobile-nav'); }
  if (html.includes(oldDesktop)) { html = html.split(oldDesktop).join(newDesktop); notes.push('desktop-nav'); }
  if (html.includes(oldLinks)) { html = html.split(oldLinks).join(newLinks); notes.push('footer'); }

  if (f === 'academics.html') {
    let n = 0;
    for (const [text, stem] of Object.entries(deptMap)) {
      const oldTag = `<li>${text}</li>`;
      const newTag = `<li><a href="department-${stem}.html">${text}</a></li>`;
      if (html.includes(oldTag)) { html = html.split(oldTag).join(newTag); n++; }
    }
    notes.push('depts:' + n + '/' + Object.keys(deptMap).length);
  }

  if (f === 'research.html') {
    let n = 0;
    for (const [text, href] of Object.entries(instMap)) {
      const oldTag = `<a href="research.html">${text}</a>`;
      const newTag = `<a href="${href}">${text}</a>`;
      if (html.includes(oldTag)) { html = html.split(oldTag).join(newTag); n++; }
    }
    notes.push('institutes:' + n + '/' + Object.keys(instMap).length);

    const oldSzic = `<h3 class="box-title"><a href="research.html">Sheikh Zayed Islamic Center</a></h3>
            <p class="box-text">Research and teaching in Islamic studies. Email: info@szic.edu.pk</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;
    const newSzic = `<h3 class="box-title"><a href="research.html">Sheikh Zayed Islamic Center</a></h3>
            <p class="box-text">Research and teaching in Islamic studies. Email: info@szic.edu.pk</p>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-md-6">
        <div class="research-card">
          <div class="box-img global-img"><img src="assets/img/uok/banner-dpa.jpg" alt="Shaheed Mohtarma Benazir Bhutto Chair"></div>
          <div class="box-content">
            <h3 class="box-title"><a href="institute-smbbc.html">Shaheed Mohtarma Benazir Bhutto Chair</a></h3>
            <p class="box-text">A research and advisory chair established at the University of Karachi.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;
    if (html.includes(oldSzic)) { html = html.split(oldSzic).join(newSzic); notes.push('smbbc-card'); }
    else notes.push('smbbc-card:NOMATCH');
  }

  fs.writeFileSync(f, html, {flag: 'w'});
  report.push(f + ': ' + notes.join(','));
}
console.log(report.join('\n'));
