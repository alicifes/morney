type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;  //数据类型
  amount: number;
  createdAt?: string ;
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
type RootState = {
  recordList: RecordItem[],
  createRecordError:Error|null,
  tagList: Tag[],
  currentTag?:Tag,
}


interface Window {
  store: {
    tagList: Tag[];
    creatTag: (name: string) => void;
    removeTag: (name: string) => boolean;
    updateTag: TagListModel['update'];   //这两个的格式相同
    findTag: (id: string) => Tag | undefined;
    recordList: RecordItem[];
    creatRecord: (record: RecordItem) => void;
  };
}

