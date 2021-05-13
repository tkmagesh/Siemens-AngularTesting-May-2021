import { Bug } from "../models/bug";


export class BugStorageService{
    private storage = window.localStorage;
    private currentBugId : number = 0;

    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this.currentBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    remove(bug : Bug) : void {
        this.storage.removeItem(`bug-${bug.id}`);
    }

    getAll() : Bug[] {
        let result : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index);
            if (key?.startsWith('bug')){
                const rawData = this.storage.getItem(key || ''),
                    bug = JSON.parse(rawData || '');
                result.push(bug);
                this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            }
        }
        return result;
    }

}