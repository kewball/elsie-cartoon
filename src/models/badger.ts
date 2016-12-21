
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class Ute {
  db: any;
  constructor() {
    // console.log(`Ute is building new Storage facility`);
    this.db = new Storage;
  }

  /**
   * get the keys, check for db.empty.
   * get dbglob, check for current Box & Thing.
   */
  async dbChekFAIL() {
    let bif: any;
    let baz: any;
    let answer: any;
    let tellem: any;
    [bif, baz] = await Promise.all([
      this.db.keys().then((ret) => {
        if (ret.length === 0) {
          answer = "empty";
        } else {
          answer = ret.length + " entries"
        }
        console.log(`bif ret ${JSON.stringify(answer)}`);
        return bif = Object.assign({}, answer);
      }),
      this.db.get("dbglob").then((res) => {
        console.log(`baz ret ${JSON.stringify(res)}`);
        return baz = Object.assign({}, res);
      })
    ])
  }

  // return new Promise((resolve, reject) => {
  //   this.db.keys()
  //     .then((res) => {
  //       // console.log(`Ute.dbKeys ${JSON.stringify(res)}`);
  //       resolve({ dbKeys: res });
  //     })
  //     .catch((err) => {
  //       console.log(`Ute.dbKeys EE ${JSON.stringify(err)}`);
  //       reject(err);
  //     })
  // })


  /** change BOZO's Timeouts */
  bozo(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Hello")
      }, 1000),
        setTimeout(function () {
          reject("Goodbye")
        }, 500);
    })
  }

  /** Returns {dbKeys:[keys,keys,keys...]} */
  dbKeys(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.keys()
        .then((res) => {
          // console.log(`Ute.dbKeys ${JSON.stringify(res)}`);
          resolve({ dbKeys: res });
        })
        .catch((err) => {
          console.log(`Ute.dbKeys EE ${JSON.stringify(err)}`);
          reject(err);
        })
    })
  }

  /** return the "global" record
   * glob: {"curBox":"1482200392582","curBoxBadge":"cats-2.jpg","curThg":false,"curThgBadge":false}
   */
  dbGetGlob(key: string = "dbglob"): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.get(key)
        .then((res) => {
          if (res === undefined || res == '' || res == {} || res == null) {
            res = {
              glob: {
                curBox: false, curBoxBadge: false,
                curThg: false, curThgBadge: false
              }
            }
          }
          resolve({ dbglob: res });
        })
        .catch((err) => {
          console.log(`Ute.dbGetGlob2 EE ${JSON.stringify(err)}`);
          reject(err);
        })
    })
  }

  dbSetGlob(key, val): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.set(key, val)
        .then((res) => {
          // console.log(`Ute.dbSetGlob2 ${JSON.stringify(res)}`);
          resolve({ status: "OK" });
        })
        .catch((err) => {
          console.log(`Ute.dbSetGlob2 EE ${JSON.stringify(err)}`);
          reject(err);
        })
    })
  }


  iR(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello world!"), 1000);
    });
  }

  /**
   * Returns an array of unique Date.valueOf strings.
   * Created by arithmetic so's they're unique.
   * @param starter: an optional Date value.
   */
  ids(starter: Date = new Date()): Promise<any> {
    return new Promise((resolve) => {
      let stack = [];
      let base = starter.valueOf();
      for (let i = 0; i < 100; i++) {
        base = base + 13;
        stack.push(base.toString());
      }
      resolve(stack);
    })
  }

  idsWORKS(starter: Date = new Date()): string[] {
    let stack = [];
    let base = starter.valueOf();
    for (let i = 0; i < 100; i++) {
      base = base + 13;
      stack.push(base.toString());
    }
    return stack;
  }

  /**
   * Receive the usual Camera-style date value.
   * Show Time with milliseconds
   * @param t: as in Date().valueOf().toString()
   */
  myTime(t: string): string {
    let slag = new Date(Number(t));
    return ("0" + slag.getHours()).slice(-2) + ":" + ("0" + slag.getMinutes()).slice(-2) + ":" + ("0" + slag.getSeconds()).slice(-2) + "." + ("00" + slag.getUTCMilliseconds()).slice(-3);
  }

}


export class DRing {
  public value: string;
  public human: string;
  constructor() {
    let when = new Date();
    // let s = when.valueOf().toString();
    // let h = when.toString();
    return ({ value: when.valueOf().toString(), human: when.toString() })
  }
} // DRing


@Injectable()
export class Badger {

  constructor(
    public id: string = '',
    public signetValue: string = '',
    public action: string = '',
    public badge: string = '',
    public thing: string = '',
    public box: string = '',
    public signetHuman: string = ''
  ) {
    let jam = new DRing();
    this.id = jam.value;
    this.signetValue = jam.value;
    this.signetHuman = jam.human;
    // this.badge = jam.value + ".jpg"; // No. Let Camera decide.
  }

  myTime(t: string): string {
    let slag = new Date(Number(t));
    return ("0" + slag.getHours()).slice(-2) + ":" + ("0" + slag.getMinutes()).slice(-2) + ":" + ("0" + slag.getSeconds()).slice(-2) + "." + ("00" + slag.getUTCMilliseconds()).slice(-3);
  }

}
