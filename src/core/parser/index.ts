import * as t from 'proto-parser';
import { readFile } from "../../utils/file";
import log from '../../utils/logger';
import ProtoStructor from './struct';

function parser(path: string) {
  try {
    const parsedResult = t.parse(readFile(path));
    const res = new ProtoStructor(parsedResult as t.ProtoDocument).struct();
    return res;
  } catch(err) {
    log.error(err);
  }
}

export default parser;