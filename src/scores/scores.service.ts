import { Injectable } from '@nestjs/common';
import { scoresDto } from './dto/scores.dto.js';

@Injectable()
export class ScoresService {
    calculateAverage(dto: scoresDto){
        let scores = dto.scores
        let passMark = dto.passMark ?? 70
        let count = scores.length
        let highest = Math.max(...scores)
        let lowest = Math.min(...scores)
        let passed = 0
        let failed = 0

        let sum = scores.reduce((acc, val) => acc + val, 0)
        let average = Number((sum / count).toFixed(1))

        for(let i = 0; i < scores.length; i++){
            if(scores[i] > passMark){
                passed++
            }
            else{
                failed++
            }
        }
        
        return {
            success: true,
            message: "Score summary calculated",
            data: {
                count: count,
                average: average,
                highest: highest,
                lowest: lowest,
                passMark: passMark,
                passed: passed,
                failed: failed
  }
        }
    }
}
