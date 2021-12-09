import * as path from 'path';
import modeuleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

modeuleAlias.addAliases({
    '@src': path.join(files, 'src'),
    'test': path.join(files, 'test')
})

