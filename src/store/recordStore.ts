import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const recordStore = {
  recordList:[] as RecordItem[],
  fetchRecords() {
    this.recordList= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  creatRecord (record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  }
};

recordStore.fetchRecords();

export default recordStore;