/***
 * @name        cli-prompt
 * @package     @cloud-vault
 * @summary     ESM-based CLI Prompt
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import Utility from "util";
import Input from "readline";
import Process from "process";
/***
 * Asynchronous CLI Prompt
 *
 * @param query
 *
 * @returns {Promise<string>}
 *
 * @constructor
 *
 */
const Prompt = (query) => {
    const Data = new Promise(async (resolve, reject) => {
        let $ = "";
        const Interface = Input.createInterface({
            input: Process.openStdin(),
            output: Process.stdout
        });
        const prompt = Utility.promisify(Interface.question).bind(Interface);
        try {
            $ = await prompt(query);
        }
        catch (_) {
            reject(_);
        }
        finally {
            Interface.close();
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve($);
    });
    return Data;
};
export { Prompt };
export default Prompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sT0FBTyxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCOzs7Ozs7Ozs7R0FTRztBQUVILE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDN0IsTUFBTSxJQUFJLEdBQW9CLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDaEUsSUFBSSxDQUFDLEdBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRSxJQUFJO1lBQ0EsQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQUMsT0FBUSxDQUFDLEVBQUc7WUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTtnQkFDcEI7WUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FBRTtRQUU5Qiw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBRWxCLGVBQWUsTUFBTSxDQUFDIn0=