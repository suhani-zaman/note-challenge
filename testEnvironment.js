
window.describe_block_tag = '';
window.describe_it_tag = '';
function describe (description, callback) {
    // this is deliberately global!
    window.describe_block_tag = description;
    callback();
}
function it (description, callback) {
    window.describe_it_tag = description;
    try {
        callback()
    } catch (error) {
        console.log(`${window.describe_block_tag || ""}: ${description} failed with error: ${error.message}`)
    }
}

function passedToHtml(message){
    let el = document.createElement('div');
    el.setAttribute('data-passed', "true");
    el.innerHTML = message;
    document.body.insertAdjacentElement('beforeend',el);
}

function failedToHtml(message){
    let el = document.createElement('div');
    el.setAttribute('data-passed', "false");
    el.innerHTML = message;
    document.body.insertAdjacentElement('beforeend',el);
}

function expect(actual) {
    return {
        toEqual: function (expected) {
            if (actual === expected) {
                passedToHtml(`Test(PASSED) ${window.describe_block_tag} <br/> ${window.describe_it_tag}`);
                console.log(`- Test(PASSED) ${window.describe_block_tag}`);
            } else {
                failedToHtml(`Test(FAILED) ${window.describe_block_tag} <br/> (${window.describe_it_tag}) expected ${actual} to be ${expected}, but it was not`);
                throw new Error(`expected ${actual} to be ${expected}, but it was not`)
            }
        },
        toThrow: function () {
            let itThrew = false
            try {
                actual()
            } catch (error) {
                itThrew = true
            }

            if (!itThrew) {
                throw new Error("expected it to throw an error!")
            } else {
                console.log(".")
            }
        } 
    }
}

//     describe("sum", () => {
//         it ("adds 1 and 2 to make 3", () => {
//             expect(sum(1, 2)).toEqual(3);
//         })
// 
//         it("throws an exception when given something which is not a number", () => {
//             expect(() => {sum("one", "two")}).toThrow()
//         })
//     })


