/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    const MissionUtils = require("@woowacourse/mission-utils");
    var bridgeSize;
    MissionUtils.Console.print('다리의 길이를 입력해주세요.');
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      bridgeSize = answer;
      MissionUtils.Console.print(answer);
      if (this.checkBridgeSize(bridgeSize)) throw '[ERROR] wrong size';
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print('이동할 칸을 선택해주세요. (위: U, 아래: D)');
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (moving) => {
      if (this.checkMoving(moving)) throw '[ERROR] wrong moving';
      return moving;
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {

    
  },

  checkBridgeSize(bridgeSize){
    if (isNaN(bridgeSize)) return true;
    if ((bridgeSize<3)||(bridgeSize>20)) return true;
    if (bridgeSize%1 != 0) return true;
  },

  checkMoving(moving){
    if (((moving == 'N') || (moving == 'n') || (moving == 'U') || (moving == 'u')) == false)
      return true;
  }


};

module.exports = InputView;
