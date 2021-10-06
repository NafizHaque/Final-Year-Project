pragma solidity >=0.4.21 <0.6.0;

contract Med{
    struct fileData {
        string fileName;
        string fileHash;
        string datetime;
    }

   struct patientFile {
        address id;
        string name;
        string number;
        string email;
        uint fileCount;
        uint doctorCount;
    }
    
    struct doctorFile {
        address doctorAccount;
        string doctorName;
    }

    mapping (address => patientFile) public patients;
    mapping (address => mapping (uint => fileData)) public files;
    mapping (address => mapping (uint => doctorFile)) public doctors;

    constructor() public {}

    function saveFile(string memory _fname, string memory _fhash, string memory _datetime) public {
        patientFile storage patient = patients[msg.sender];
        files[msg.sender][patient.fileCount] = fileData(_fname, _fhash, _datetime);
        patient.fileCount ++;
    }

    function addPatient(address _id, string memory _name, string memory number, string memory _email) public {
        patientFile storage patient = patients[msg.sender];
        patient.id = _id;
        patient.name = _name;
        patient.number = number;
        patient.email = _email;
        patient.fileCount = 0;
        patient.doctorCount = 0;
    }

    

    function saveDoctor(string memory _doctorName, address _doctorAccount) public {
        patientFile storage patient = patients[msg.sender];
        doctors[msg.sender][patient.doctorCount] = doctorFile(_doctorAccount, _doctorName);
        patient.doctorCount ++;
    }


    
}