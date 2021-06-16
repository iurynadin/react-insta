## Continues from:
dia 2: https://youtu.be/AKeaaa8yAAk?t=2584

dia 3: https://youtu.be/AKeaaa8yAAk?t=5467

dia 4: https://youtu.be/AKeaaa8yAAk?t=7373

dia 5: https://youtu.be/AKeaaa8yAAk?t=9530

dia 6: https://youtu.be/AKeaaa8yAAk?t=11772

dia 7: https://youtu.be/AKeaaa8yAAk?t=13622

dia 8:  https://youtu.be/AKeaaa8yAAk?t=15189
        https://youtu.be/AKeaaa8yAAk?t=16157

dia 9: https://youtu.be/AKeaaa8yAAk?t=17577
        https://youtu.be/AKeaaa8yAAk?t=18568

dia 10: https://youtu.be/AKeaaa8yAAk?t=19216

dia 11: https://youtu.be/AKeaaa8yAAk?t=20469

dia 12: https://youtu.be/AKeaaa8yAAk?t=22202





## Firestore rules for production
// production rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth.uid != null;
    }
  }
}