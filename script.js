function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Valencia Zuluaga;Dianny;;;
FN:Dianny Valencia Zuluaga
TEL:+57 3164829056
EMAIL;TYPE=WORK: dianny.valencia@autopacifico.com.co
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
