const loaclStorageKeyName = 'tagList';
type TagListModel = {
  data: string[],
  fetch: () => string[],
  create: (name: string) => 'success'|'duplicated'; //success表示成功。duplicated表示重复,该方法叫联合类型
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  create(name) {
    if (this.data.indexOf(name) > 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';

  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(loaclStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
  }
};

export {tagListModel};