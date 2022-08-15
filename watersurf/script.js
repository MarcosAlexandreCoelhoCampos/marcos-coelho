const localNameTeacher = document.getElementById('teacherName');
const localTextTeacher = document.getElementById('teacherInformation');

const teachersTexts = [
  {
    teacher: 'Anderson Almeida',
    text: 'Anderson é lobortis scelerisque fermentum dui sit amet luctus venenatis, lectus magna fringilla, sit amet luctus venenatis, lectus magna fringilla',
  },
  {
    teacher: 'Gabriel Silva',
    text: 'Gabriel é  sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
  {
    teacher: 'Andressa Coelho',
    text: 'Andressa é m, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
  {
    teacher: 'Matheus Santos',
    text: 'Matheus é ur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
];

function changeTeacherText(teacher) {
  teachersTexts.forEach((e) => {
    if (e.teacher === teacher) {
      localNameTeacher.innerText = e.teacher;
      localTextTeacher.innerText = e.text;
    }
  });
}

changeTeacherText(teachersTexts[1].teacher);

const localStudentDeposition = document.getElementById('studentDeposition');
const localDeposition = document.getElementById('deposition');

const studentsText = [
  {
    students: 'Richard Silva',
    text: 'Anderson é Lorem piscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
  {
    students: 'Lucas Andrade',
    text: 'Gabriel é Lorem ipsum dolor sg elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
  {
    students: 'Kelly Almeida',
    text: 'Andressa é Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui',
  },
  {
    students: 'Vinicius Carvalho',
    text: 'Matheus é Lorem ipsum dolor sit aiam quis enim lobortis scelerisque fermentum dui',
  },
];

let number = 0;
let n = number;

changeDeposition();

function nextDeposition() {
  n = number;
  if (++n >= studentsText.length || n >= studentsText.length) {
    number = 0;
  } else {
    ++number;
  }
  changeDeposition();
}

function previousDeposition() {
  n = number;
  if (n <= 0) {
    number = studentsText.length;
    --number;
  } else {
    --number;
  }
  changeDeposition();
}

function changeDeposition() {
  localStudentDeposition.innerText = studentsText[number].students;
  localDeposition.innerText = studentsText[number].text;
}

function changeActive(i) {
  i.classList.toggle('active');
  console.log(i);
}
