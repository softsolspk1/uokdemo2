import os
import glob
import re

dir_path = r'c:\Users\softs\Desktop\UOK Website\uok-stadum'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

changed_files = 0

research_new_desktop = """<li class="menu-item-has-children">
                      <a href="research.html">Research</a>
                      <ul class="sub-menu">
                        <li><a href="research.html">Research Institutes Overview</a></li>
                        <li><a href="institute-ies.html">Institute of Environmental Studies</a></li>
                        <li><a href="institute-ims.html">Institute of Marine Science</a></li>
                        <li><a href="institute-isst.html">Institute of Space Science &amp; Technology</a></li>
                        <li><a href="institute-nnrc.html">National Nematological Research Centre</a></li>
                        <li><a href="institute-cdfst.html">Center for Digital Forensic Science &amp; Technology</a></li>
                        <li><a href="institute-asce.html">Area Study Center for Europe</a></li>
                        <li><a href="institute-cmg.html">Centre for Molecular Genetics</a></li>
                        <li><a href="institute-cews.html">Centre of Excellence for Women's Studies</a></li>
                        <li><a href="institute-chwb.html">Center for Health &amp; Wellbeing</a></li>
                        <li><a href="institute-psc.html">Pakistan Study Center</a></li>
                        <li><a href="institute-confucius.html">Confucius Institute</a></li>
                        <li><a href="institute-sympdc.html">Sardar Yasin Malik Professional Development Centre</a></li>
                        <li><a href="institute-smbbc.html">Shaheed Mohtarma Benazir Bhutto Chair</a></li>
                        <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
                        <li><a href="journals.html">Academic Journals</a></li>
                      </ul>
                    </li>"""

research_new_mobile = """<li class="menu-item-has-children">
          <a href="research.html">Research</a>
          <ul class="sub-menu">
            <li><a href="research.html">Research Institutes Overview</a></li>
            <li><a href="institute-ies.html">Institute of Environmental Studies</a></li>
            <li><a href="institute-ims.html">Institute of Marine Science</a></li>
            <li><a href="institute-isst.html">Institute of Space Science &amp; Technology</a></li>
            <li><a href="institute-nnrc.html">National Nematological Research Centre</a></li>
            <li><a href="institute-cdfst.html">Center for Digital Forensic Science &amp; Technology</a></li>
            <li><a href="institute-asce.html">Area Study Center for Europe</a></li>
            <li><a href="institute-cmg.html">Centre for Molecular Genetics</a></li>
            <li><a href="institute-cews.html">Centre of Excellence for Women's Studies</a></li>
            <li><a href="institute-chwb.html">Center for Health &amp; Wellbeing</a></li>
            <li><a href="institute-psc.html">Pakistan Study Center</a></li>
            <li><a href="institute-confucius.html">Confucius Institute</a></li>
            <li><a href="institute-sympdc.html">Sardar Yasin Malik Professional Development Centre</a></li>
            <li><a href="institute-smbbc.html">Shaheed Mohtarma Benazir Bhutto Chair</a></li>
            <li><a href="institute-kibge.html">Dr. A.Q. Khan Institute (KIBGE)</a></li>
            <li><a href="journals.html">Academic Journals</a></li>
          </ul>
        </li>"""


for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    new_content = content

    # 1. Update Research Menu (Mobile & Desktop)
    # The regex targets the entire <li class="menu-item-has-children"> containing the Research link.
    new_content = re.sub(
        r'<li class="menu-item-has-children">\s*<a href="research\.html">Research</a>\s*<ul class="sub-menu">.*?</ul>\s*</li>',
        lambda m: research_new_desktop if 'class="main-menu' in content[:m.start()] and m.start() - content.rfind('<nav class="main-menu') < 2000 else research_new_mobile,
        new_content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # 2. Remove UBIT from Academics Menu
    new_content = re.sub(
        r'\s*<li><a href="department-computerscience\.html">Dept\. of Computer Science \(UBIT\)</a></li>',
        '',
        new_content,
        flags=re.IGNORECASE
    )

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        changed_files += 1

print(f'Modified {changed_files} files.')
