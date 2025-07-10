import lib from 'dayjs';
import 'dayjs/locale/pt-BR';
import relativeTIme from 'dayjs/plugin/relativeTime';

lib.locale('pt-BR');
lib.extend(relativeTIme);

export const dayjs = lib;
