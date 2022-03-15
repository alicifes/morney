type RecordItem = {
  tags: string[];
  notes: string;
  type: string;  //数据类型
  amount: number;
  createdAt?: Date;
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'success' | 'duplicated'; //success表示成功。duplicated表示重复,该方法叫联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void,
  remove: (id: string) => boolean,
}
interface Window{
 tagList:Tag[];
}

