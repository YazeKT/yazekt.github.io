import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'src' / 'data' / 'resume.json').read_text(encoding='utf-8'))
OUTPUT = ROOT / 'public' / 'resume' / 'kirsten-trimaley-resume.pdf'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

regular = Path(r'C:\Windows\Fonts\arial.ttf')
bold = Path(r'C:\Windows\Fonts\arialbd.ttf')
if regular.exists() and bold.exists():
    pdfmetrics.registerFont(TTFont('YazeSans', str(regular)))
    pdfmetrics.registerFont(TTFont('YazeSansBold', str(bold)))
    FONT = 'YazeSans'
    BOLD = 'YazeSansBold'
else:
    FONT = 'Helvetica'
    BOLD = 'Helvetica-Bold'

paper = colors.HexColor('#F3EFE7')
ink = colors.HexColor('#101113')
cobalt = colors.HexColor('#2454FF')
orange = colors.HexColor('#FF5A36')
muted = colors.HexColor('#55565B')

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=17 * mm, leftMargin=17 * mm,
    topMargin=13 * mm, bottomMargin=13 * mm,
    title='Kirsten Trimaley - Resume', author='Kirsten Trimaley / Yaze Media'
)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', fontName=BOLD, fontSize=27, leading=27, textColor=ink, spaceAfter=3 * mm, alignment=TA_LEFT))
styles.add(ParagraphStyle(name='Role', fontName=FONT, fontSize=12, leading=15, textColor=ink, spaceAfter=4.5 * mm))
styles.add(ParagraphStyle(name='Section', fontName=BOLD, fontSize=14, leading=16, textColor=ink, spaceBefore=3.5 * mm, spaceAfter=2 * mm))
styles.add(ParagraphStyle(name='BodyYaze', fontName=FONT, fontSize=8.8, leading=12.2, textColor=ink))
styles.add(ParagraphStyle(name='SmallYaze', fontName=FONT, fontSize=7.6, leading=11, textColor=muted))
styles.add(ParagraphStyle(name='ContactLight', fontName=FONT, fontSize=7.6, leading=11, textColor=colors.white))
styles.add(ParagraphStyle(name='ContactDark', fontName=FONT, fontSize=7.6, leading=11, textColor=ink))
styles.add(ParagraphStyle(name='Project', fontName=BOLD, fontSize=11, leading=13, textColor=ink, spaceAfter=1.5 * mm))

story = [
    Table([[Paragraph('YAZE MEDIA / PROOF OF WORK', styles['SmallYaze']), Paragraph('EAST LONDON → REMOTE', styles['SmallYaze'])]], colWidths=[105 * mm, 68 * mm], style=TableStyle([('LINEBELOW', (0,0), (-1,-1), .8, ink), ('BOTTOMPADDING',(0,0),(-1,-1),3 * mm), ('ALIGN',(1,0),(1,0),'RIGHT')])),
    Spacer(1, 5 * mm),
    Paragraph(DATA['name'], styles['Name']),
    Paragraph(DATA['title'], styles['Role']),
    Table([[Paragraph('kirstentrimaley@gmail.com', styles['ContactLight']), Paragraph('github.com/YazeKT', styles['SmallYaze']), Paragraph('South Africa', styles['ContactDark'])]], colWidths=[68 * mm, 60 * mm, 45 * mm], style=TableStyle([('BACKGROUND',(0,0),(0,0),cobalt),('BACKGROUND',(2,0),(2,0),orange),('BOX',(0,0),(-1,-1),.8,ink),('INNERGRID',(0,0),(-1,-1),.8,ink),('PADDING',(0,0),(-1,-1),2 * mm)])),
    Paragraph('Profile', styles['Section']),
    Paragraph(DATA['summary'], styles['BodyYaze']),
    Paragraph('Selected product work', styles['Section'])
]

for project in DATA['projects']:
    story.append(KeepTogether(Table([
        [Paragraph(project['year'], styles['SmallYaze']), Paragraph(project['name'], styles['Project'])],
        ['', Paragraph(project['description'], styles['BodyYaze'])]
    ], colWidths=[20 * mm, 153 * mm], style=TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LINEABOVE',(0,0),(-1,0),.4,colors.HexColor('#A49F94')),('TOPPADDING',(0,0),(-1,-1),1.5 * mm),('BOTTOMPADDING',(0,0),(-1,-1),1.5 * mm)]))))

story.extend([
    Paragraph('Strengths', styles['Section']),
    Paragraph(' · '.join(DATA['strengths']), styles['BodyYaze']),
    Paragraph('Core tools', styles['Section']),
    Paragraph(' · '.join(DATA['tools']), styles['BodyYaze']),
    Paragraph('Working approach', styles['Section']),
    Paragraph(DATA['approach'], styles['BodyYaze'])
])

def page(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(ink)
    canvas.setLineWidth(.6)
    canvas.line(18 * mm, 11 * mm, 192 * mm, 11 * mm)
    canvas.setFont(FONT, 7)
    canvas.setFillColor(muted)
    canvas.drawString(18 * mm, 7 * mm, 'YAZE MEDIA / KIRSTEN TRIMALEY')
    canvas.drawRightString(192 * mm, 7 * mm, f'{document.page}')
    canvas.restoreState()

doc.build(story, onFirstPage=page, onLaterPages=page)
print(f'PASS: wrote {OUTPUT}')
