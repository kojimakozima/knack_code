document.addEventListener("DOMContentLoaded", function() {
    // サンプルデータ（後でKnackのデータに置き換え可能）
    const tasks = [
        {
            id: "Task_1",
            name: "プロジェクト開始",
            start: "2024-02-01",
            end: "2024-02-05",
            progress: 50,
            dependencies: ""
        },
        {
            id: "Task_2",
            name: "設計フェーズ",
            start: "2024-02-06",
            end: "2024-02-15",
            progress: 30,
            dependencies: "Task_1"
        },
        {
            id: "Task_3",
            name: "開発フェーズ",
            start: "2024-02-16",
            end: "2024-03-10",
            progress: 20,
            dependencies: "Task_2"
        },
        {
            id: "Task_4",
            name: "テスト",
            start: "2024-03-11",
            end: "2024-03-20",
            progress: 10,
            dependencies: "Task_3"
        },
        {
            id: "Task_5",
            name: "リリース",
            start: "2024-03-21",
            end: "2024-03-25",
            progress: 0,
            dependencies: "Task_4"
        }
    ];

    // Gantt チャートを描画
    function drawGanttChart() {
        new Gantt("#gantt", tasks, {
            header_height: 50,
            column_width: 30,
            step: 24,
            view_modes: ["Day", "Week", "Month"],
            bar_height: 20,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 18,
            date_format: "YYYY-MM-DD",
            custom_popup_html: task => `
                <div class="popup">
                    <strong>${task.name}</strong><br>
                    開始日: ${task.start}<br>
                    終了日: ${task.end}<br>
                    進捗: ${task.progress}%
                </div>
            `
        });
    }

    drawGanttChart();
});
